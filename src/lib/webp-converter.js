// WebP Converter – Client-side tool
// Features: Drag & Drop, max file size check, quality slider, resize options (keep AR), previews, ZIP download, GA events

// ===== Config =====
const MAX_FILE_BYTES = 25 * 1024 * 1024; // 25 MB
const PREVIEW_MAX_EDGE = 900; // downscale voor preview (sneller/lager geheugen)
const JSZIP_URL = "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js";

// ===== Helpers =====
const $ = (sel) => document.querySelector(sel);
const fmtBytes = (n) => {
  if (!Number.isFinite(n)) return "-";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(1)} ${units[i]}`;
};
const gaEvent = (action, params = {}) => {
  try {
    if (typeof window.gtag === "function") window.gtag("event", action, params);
  } catch {}
};
const loadJSZip = async () => {
  if (typeof window.JSZip !== "undefined") return window.JSZip;
  await new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = JSZIP_URL;
    s.async = true;
    s.onload = res;
    s.onerror = () => rej(new Error("JSZip kon niet geladen worden"));
    document.head.appendChild(s);
  });
  return window.JSZip;
};

// ===== State =====
let filesState = []; // [{id, file, webpBlob, webpSize, urlThumb}]
let nextId = 1;

// ===== DOM refs =====
// Selecteer alle elementen direct, zodat ze overal in het script beschikbaar zijn.
const fileInput = $("#fileInput");
const dropzone = $("#dropzone");
const clearBtn = $("#clearBtn");
const qualityRange = $("#quality");
const qualityOut = $("#qualityOut");
const previewGrid = $("#preview");
const downloadZipBtn = $("#downloadZipBtn");
const convertPreviewBtn = $("#convertPreviewBtn");
const summary = $("#summary");
const bar = $("#bar");
const resizeW = $("#resizeW");
const resizeH = $("#resizeH");
const keepAR = $("#keepAR");
const onlyDownscale = $("#onlyDownscale");
const alerts = $("#alerts");

// ===== Init =====
let _initialized = false;
function init() {
  bindEvents();
  readQuality();
}

// Run init ongeacht timing + support Astro client navigations
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
window.addEventListener?.("astro:page-load", () => {
  _initialized = false;
  init();
});

// ===== UI & Events =====
function bindEvents() {
  ["dragenter", "dragover"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("dragover");
    })
  );
  ["dragleave", "drop"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
    })
  );
  dropzone.addEventListener("drop", (e) => addFiles(e.dataTransfer.files));

  fileInput.addEventListener("change", (e) => addFiles(e.target.files));
  clearBtn.addEventListener("click", clearAll);

  qualityRange.addEventListener("input", readQuality);

  convertPreviewBtn.addEventListener("click", generateAllPreviews);
  downloadZipBtn.addEventListener("click", downloadZip);

  [resizeW, resizeH, keepAR, onlyDownscale].forEach((el) => {
    el.addEventListener("input", generatePreviewsDebounced);
    el.addEventListener("change", generatePreviewsDebounced);
  });
}

function readQuality() {
  const q = parseFloat(qualityRange.value);
  qualityOut.textContent = q.toFixed(2);
  return q;
}

function alertMsg(text, type = "warn") {
  const div = document.createElement("div");
  div.className = `alert ${type === "error" ? "error" : ""}`;
  div.textContent = text;
  alerts.appendChild(div);
  setTimeout(() => div.remove(), 6000);
}

function resetProgress() {
  bar.style.width = "0%";
}
function setProgress(pct) {
  bar.style.width = `${pct}%`;
}

// ===== Files =====
function addFiles(list) {
  const arr = Array.from(list).filter((f) =>
    /image\/(png|jpe?g)/i.test(f.type)
  );
  if (!arr.length) {
    alertMsg("Geen geldige PNG/JPG-bestanden gevonden.", "error");
    return;
  }

  const tooLarge = [];
  for (const f of arr) {
    if (f.size > MAX_FILE_BYTES) {
      tooLarge.push(`${f.name} (${fmtBytes(f.size)})`);
      continue;
    }
    filesState.push({
      id: nextId++,
      file: f,
      webpBlob: null,
      webpSize: null,
      urlThumb: null,
    });
  }

  if (tooLarge.length) {
    alertMsg(
      `Overgeslagen (> ${fmtBytes(MAX_FILE_BYTES)}): ${tooLarge.join(", ")}`,
      "warn"
    );
    gaEvent("file_too_large", { count: tooLarge.length });
  }

  renderList();
  generatePreviewsDebounced();
  gaEvent("files_added", { count: arr.length - tooLarge.length });
}

function clearAll() {
  filesState = [];
  resetProgress();
  previewGrid.innerHTML = "";
  summary.textContent = "Nog geen bestanden geselecteerd.";
  gaEvent("files_cleared");
}

// ===== Resizing logica =====
function calcResizeTarget(origW, origH) {
  const targetW = parseInt(resizeW.value, 10);
  const targetH = parseInt(resizeH.value, 10);
  const keep = !!keepAR.checked;
  const onlyDown = !!onlyDownscale.checked;

  let w = origW,
    h = origH;

  if (!targetW && !targetH) return { w, h };

  if (keep) {
    const ar = origW / origH;
    if (targetW && !targetH) {
      w = targetW;
      h = Math.round(w / ar);
    } else if (!targetW && targetH) {
      h = targetH;
      w = Math.round(h * ar);
    } else if (targetW && targetH) {
      const scaleW = targetW / origW;
      const scaleH = targetH / origH;
      const scale = Math.min(scaleW, scaleH);
      w = Math.round(origW * scale);
      h = Math.round(origH * scale);
    }
  } else {
    if (targetW) w = targetW;
    if (targetH) h = targetH;
  }

  if (onlyDown && (w > origW || h > origH)) {
    w = origW;
    h = origH;
  }

  w = Math.max(1, w | 0);
  h = Math.max(1, h | 0);
  return { w, h };
}

// ===== Conversion =====
function convertImageToWebP(file, quality = 0.8, previewMode = false) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width,
          h = img.height;

        if (previewMode) {
          const r = calcResizeTarget(w, h);
          w = r.w;
          h = r.h;
          const scale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(w, h));
          w = Math.round(w * scale);
          h = Math.round(h * scale);
        } else {
          const r = calcResizeTarget(w, h);
          w = r.w;
          h = r.h;
        }

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { alpha: true });
        ctx.drawImage(img, 0, 0, w, h);
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Conversie mislukt"));
            resolve({ blob, width: w, height: h });
          },
          "image/webp",
          quality
        );
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onerror = reject;
    r.onload = () => resolve(r.result);
    r.readAsDataURL(blob);
  });
}

// ===== Render =====
function renderList() {
  if (!filesState.length) {
    previewGrid.innerHTML = "";
    summary.textContent = "Nog geen bestanden geselecteerd.";
    return;
  }
  const totalIn = filesState.reduce((s, it) => s + (it.file?.size || 0), 0);
  const totalOut = filesState.reduce((s, it) => s + (it.webpSize || 0), 0);
  summary.textContent = `Geselecteerd: ${filesState.length} • Input: ${fmtBytes(totalIn)} • Preview WebP: ${totalOut ? fmtBytes(totalOut) : "—"}`;

  previewGrid.innerHTML = filesState
    .map((it) => {
      const nameOut = it.file.name.replace(/\.(png|jpe?g)$/i, ".webp");
      return `
      <div class="card" data-id="${it.id}">
        <div class="thumb">${it.urlThumb ? `<img src="${it.urlThumb}" alt="Preview ${nameOut}">` : `<span class="muted">Nog geen preview</span>`}</div>
        <div class="meta">
          <strong title="${it.file.name}">${nameOut}</strong>
          <div class="row">
            <span class="tag">in: ${fmtBytes(it.file.size)}</span>
            <span class="tag">out: ${it.webpSize ? fmtBytes(it.webpSize) : "—"}</span>
          </div>
        </div>
        <div class="grid-actions">
          <button class="btn btn-primary" data-action="remove">Verwijderen</button>
        </div>
      </div>
    `;
    })
    .join("");

  previewGrid.querySelectorAll(".card .btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const action = e.currentTarget.getAttribute("data-action");
      const card = e.currentTarget.closest(".card");
      const id = Number(card.getAttribute("data-id"));
      if (action === "remove") {
        filesState = filesState.filter((x) => x.id !== id);
        renderList();
      } else if (action === "repreview") {
        const item = filesState.find((x) => x.id === id);
        if (item) await buildPreviewForItem(item);
      }
    });
  });
}

// ===== Previews =====
async function buildPreviewForItem(item) {
  try {
    const q = readQuality();
    const { blob } = await convertImageToWebP(item.file, q, true);
    item.webpBlob = blob;
    item.webpSize = blob.size;
    item.urlThumb = await blobToDataURL(blob);
  } catch (err) {
    console.error("Preview error:", err);
    item.webpBlob = null;
    item.webpSize = null;
    item.urlThumb = null;
    alertMsg(`Preview mislukt voor ${item.file.name}`, "error");
  } finally {
    renderList();
  }
}

let previewTimer = null;
function generatePreviewsDebounced() {
  if (previewTimer) clearTimeout(previewTimer);
  previewTimer = setTimeout(generateAllPreviews, 250);
}

async function generateAllPreviews() {
  if (!filesState.length) return;
  setProgress(0);
  const total = filesState.length;
  let done = 0;
  for (const item of filesState) {
    await buildPreviewForItem(item);
    done++;
    setProgress(Math.round((done / total) * 100));
  }
  setProgress(100);
  setTimeout(() => resetProgress(), 600);
  gaEvent("previews_generated", { count: total });
}

// ===== Download ZIP =====
async function downloadZip() {
  if (!filesState.length) {
    alertMsg("Selecteer eerst één of meer PNG/JPG-bestanden.", "error");
    return;
  }
  const JSZip = await loadJSZip().catch((e) => {
    console.error(e);
    alertMsg("Kon JSZip niet laden. Controleer je verbinding of CSP.", "error");
  });
  if (!JSZip) return;

  const q = readQuality();
  const zip = new JSZip();
  setProgress(0);

  let processed = 0;
  for (const item of filesState) {
    try {
      const { blob } = await convertImageToWebP(item.file, q, false);
      const nameOut = item.file.name.replace(/\.(png|jpe?g)$/i, ".webp");
      zip.file(nameOut, blob);
    } catch (err) {
      console.error("Conversie fout:", err);
      alertMsg(`Conversie fout voor ${item.file.name}`, "error");
    } finally {
      processed++;
      setProgress(Math.round((processed / filesState.length) * 100));
    }
  }

  try {
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted_webp_images.zip";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 800);
    setTimeout(() => resetProgress(), 700);
    gaEvent("zip_downloaded", { count: filesState.length });
  } catch (e) {
    console.error("ZIP genereren mislukt:", e);
    alertMsg(
      "ZIP genereren mislukt. Probeer opnieuw of met minder/betere bestanden.",
      "error"
    );
  }
}
