// Get references to HTML elements
const urlInput = document.getElementById("urlInput");
const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const keywordsInput = document.getElementById("keywordsInput");
const capitalizeButton = document.getElementById("capitalizeButton");

// Desktop Preview Elements
const urlPreview = document.getElementById("urlPreview");
const titlePreview = document.getElementById("titlePreview");
const titleLinkPreview = document.getElementById("titleLinkPreview");
const descriptionPreview = document.getElementById("descriptionPreview");
const faviconPreview = document.getElementById("faviconPreview");

// Mobile Preview Elements
const mobileUrlPreview = document.getElementById("mobileUrlPreview");
const mobileTitlePreview = document.getElementById("mobileTitlePreview");
const mobileTitleLinkPreview = document.getElementById(
  "mobileTitleLinkPreview"
);
const mobileDescriptionPreview = document.getElementById(
  "mobileDescriptionPreview"
);
const mobileFaviconPreview = document.getElementById("mobileFaviconPreview");

const titleCounter = document.getElementById("titleCounter");
const descriptionCounter = document.getElementById("descriptionCounter");
// Ensure the helper span is accessed correctly (it's inside the wrapper now)
const textWidthHelper = document.getElementById("text-width-helper");

// --- Configuration ---
// Bijgewerkt met de meest recente Google pixel-breedtes
const MAX_DESKTOP_TITLE_PIXEL_WIDTH = 600;
const MAX_MOBILE_TITLE_PIXEL_WIDTH_APPROX = 420;
const MAX_DESC_PIXEL_WIDTH = 990;
const MAX_MOBILE_DESC_PIXEL_WIDTH = 680;
const MAX_DESC_CHAR_LENGTH = 160;

// Style definitions for measurement
const desktopTitleStyle = {
  fontSize: "20px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal", // Toegevoegd voor nauwkeurigere meting
};
const mobileTitleStyle = {
  fontSize: "18px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal", // Toegevoegd
};
const desktopDescriptionStyle = {
  fontSize: "14px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal", // Toegevoegd
};
const mobileDescriptionStyle = {
  fontSize: "13px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal", // Toegevoegd
};

// --- Helper Functions ---
function getTextPixelWidth(text, style) {
  if (!text || !textWidthHelper) return 0;
  textWidthHelper.style.fontSize = style.fontSize;
  textWidthHelper.style.fontFamily = style.fontFamily;
  textWidthHelper.style.fontWeight = style.fontWeight || "normal"; // Gebruik de toegevoegde fontWeight
  textWidthHelper.textContent = text;
  return textWidthHelper.offsetWidth;
}

/**
 * @param {string} text - De tekst om in te korten.
 * @param {number} maxWidth - De maximale breedte in pixels.
 * @param {object} style - Het stijlobject met font-eigenschappen.
 * @returns {string} De ingekorte tekst met ellipsis of de originele tekst.
 */
function truncateTextByWidth(text, maxWidth, style) {
  if (!textWidthHelper) return text;

  // Controleer eerst of de tekst al past
  if (getTextPixelWidth(text, style) <= maxWidth) {
    return text;
  }

  const ellipsis = "...";
  const ellipsisWidth = getTextPixelWidth(ellipsis, style);

  let truncatedText = text;
  let currentWidth = getTextPixelWidth(truncatedText, style);

  // Verwijder tekens van achteren totdat de tekst past
  while (currentWidth + ellipsisWidth > maxWidth && truncatedText.length > 0) {
    truncatedText = truncatedText.slice(0, -1);
    currentWidth = getTextPixelWidth(truncatedText, style);
  }

  // De laatste spatie-afbreking is niet altijd ideaal, beter is om per karakter te kappen.
  return truncatedText.trim() + ellipsis;
}

function updateTitleCounter(inputElement, counterElement) {
  const text = inputElement.value;
  const charCount = text.length;
  const pixelWidth = getTextPixelWidth(text, desktopTitleStyle);
  counterElement.textContent = `${charCount} karakters / ${pixelWidth}px (Desktop)`;
  if (pixelWidth > MAX_DESKTOP_TITLE_PIXEL_WIDTH || charCount > 65) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "#70757a";
  }
}

function updateDescriptionCounter(inputElement, counterElement) {
  const text = inputElement.value;
  const charCount = text.length;
  const pixelWidth = getTextPixelWidth(text, desktopDescriptionStyle);
  counterElement.textContent = `${charCount} karakters / ${pixelWidth}px (Desktop)`;
  if (pixelWidth > MAX_DESC_PIXEL_WIDTH || charCount > MAX_DESC_CHAR_LENGTH) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "#70757a";
  }
}

function getDomain(url) {
  try {
    const parsedUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsedUrl.hostname;
  } catch (e) {
    return null;
  }
}

function updateFavicon() {
  const domain = getDomain(urlInput.value);
  const faviconUrl = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=16`
    : "";
  const displayStyle = domain ? "inline-block" : "none";

  if (faviconPreview) {
    faviconPreview.src = faviconUrl;
    faviconPreview.style.display = displayStyle;
    faviconPreview.onerror = function () {
      this.style.display = "none";
    };
  }
  if (mobileFaviconPreview) {
    mobileFaviconPreview.src = faviconUrl;
    mobileFaviconPreview.style.display = displayStyle;
    mobileFaviconPreview.onerror = function () {
      this.style.display = "none";
    };
  }
}

function formatUrlForDisplay(url) {
  if (!url) return "https://www.jouw-website.nl/pagina";
  try {
    const fullUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;
    const parsedUrl = new URL(fullUrl);
    let path = parsedUrl.pathname;
    if (path !== "/" && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    const formattedPath = path.split("/").filter(Boolean).join(" › ");
    return `${parsedUrl.hostname}${formattedPath ? " › " + formattedPath : ""}`;
  } catch (e) {
    return url || "https://www.jouw-website.nl/pagina";
  }
}

function applyBoldKeywords(text, keywordsString) {
  if (!keywordsString || !text) {
    return text;
  }
  const keywords = keywordsString
    .split(/[\s,]+/)
    .map((kw) => kw.trim())
    .filter(Boolean);
  if (keywords.length === 0) {
    return text;
  }
  const escapedKeywords = keywords.map((kw) =>
    kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  return text.replace(regex, '<span class="bold-keyword">$1</span>');
}

function updatePreview() {
  // Ensure all elements are available before proceeding
  if (
    !urlInput ||
    !titleInput ||
    !descriptionInput ||
    !keywordsInput ||
    !urlPreview ||
    !titlePreview ||
    !titleLinkPreview ||
    !descriptionPreview ||
    !mobileUrlPreview ||
    !mobileTitlePreview ||
    !mobileTitleLinkPreview ||
    !mobileDescriptionPreview ||
    !titleCounter ||
    !descriptionCounter
  ) {
    console.error(
      "SERP Preview Tool: One or more required elements not found."
    );
    return;
  }

  const urlValue = urlInput.value.trim();
  const titleValue =
    titleInput.value.trim() || "Je website titel verschijnd hier";
  const descriptionValue =
    descriptionInput.value.trim() ||
    " Jouw meta beschrijving verschijnt hier....";
  const keywordsValue = keywordsInput.value.trim();

  const formattedUrl = formatUrlForDisplay(urlValue);
  const linkHref = urlValue.startsWith("http")
    ? urlValue
    : `https://${urlValue}`;
  updateFavicon();

  // Desktop Preview
  const truncatedDesktopTitleText = truncateTextByWidth(
    titleValue,
    MAX_DESKTOP_TITLE_PIXEL_WIDTH,
    desktopTitleStyle
  );
  const finalDesktopTitleHtml = applyBoldKeywords(
    truncatedDesktopTitleText,
    keywordsValue
  );
  titlePreview.innerHTML = finalDesktopTitleHtml;
  titleLinkPreview.href = linkHref;
  urlPreview.textContent = formattedUrl;

  const desktopDescPixelWidth = getTextPixelWidth(
    descriptionValue,
    desktopDescriptionStyle
  );
  let truncatedDesktopDescText = descriptionValue;
  if (desktopDescPixelWidth > MAX_DESC_PIXEL_WIDTH) {
    truncatedDesktopDescText = truncateTextByWidth(
      descriptionValue,
      MAX_DESC_PIXEL_WIDTH,
      desktopDescriptionStyle
    );
  } else if (descriptionValue.length > MAX_DESC_CHAR_LENGTH) {
    truncatedDesktopDescText =
      descriptionValue.substring(0, MAX_DESC_CHAR_LENGTH).trim() + "...";
  }
  const finalDesktopDescriptionHtml = applyBoldKeywords(
    truncatedDesktopDescText,
    keywordsValue
  );
  descriptionPreview.innerHTML = finalDesktopDescriptionHtml;

  // Mobile Preview
  // **Aanpassing:** Gebruik de truncateTextByWidth functie voor de mobiele titel
  const truncatedMobileTitleText = truncateTextByWidth(
    titleValue,
    MAX_MOBILE_TITLE_PIXEL_WIDTH_APPROX,
    mobileTitleStyle
  );
  const finalMobileTitleHtml = applyBoldKeywords(
    truncatedMobileTitleText,
    keywordsValue
  );
  mobileTitlePreview.innerHTML = finalMobileTitleHtml;
  mobileTitleLinkPreview.href = linkHref;
  mobileUrlPreview.textContent = formattedUrl;

  const mobileDescPixelWidth = getTextPixelWidth(
    descriptionValue,
    mobileDescriptionStyle
  );
  let truncatedMobileDescText = descriptionValue;
  if (mobileDescPixelWidth > MAX_MOBILE_DESC_PIXEL_WIDTH) {
    truncatedMobileDescText = truncateTextByWidth(
      descriptionValue,
      MAX_MOBILE_DESC_PIXEL_WIDTH,
      mobileDescriptionStyle
    );
  } else if (descriptionValue.length > MAX_DESC_CHAR_LENGTH) {
    truncatedMobileDescText =
      descriptionValue.substring(0, MAX_DESC_CHAR_LENGTH).trim() + "...";
  }
  const finalMobileDescriptionHtml = applyBoldKeywords(
    truncatedMobileDescText,
    keywordsValue
  );
  mobileDescriptionPreview.innerHTML = finalMobileDescriptionHtml;

  // Counters
  updateTitleCounter(titleInput, titleCounter);
  updateDescriptionCounter(descriptionInput, descriptionCounter);
}

// --- Event Listeners ---
// Defensive check: only add listeners if elements exist
if (urlInput) urlInput.addEventListener("input", updatePreview);
if (titleInput) titleInput.addEventListener("input", updatePreview);
if (descriptionInput) descriptionInput.addEventListener("input", updatePreview);
if (keywordsInput) keywordsInput.addEventListener("input", updatePreview);
if (capitalizeButton)
  capitalizeButton.addEventListener("click", () => {
    if (!titleInput) return; // Check if titleInput exists
    const currentTitle = titleInput.value;
    const capitalizedTitle = currentTitle
      .toLowerCase()
      .split(" ")
      .map((word) => {
        const smallWords = [
          "de",
          "het",
          "een",
          "en",
          "of",
          "maar",
          "want",
          "dus",
          "bij",
          "op",
          "in",
          "te",
          "van",
          "voor",
          "tot",
          "door",
          "met",
          "zonder",
        ];
        if (word === "") return "";
        if (
          smallWords.includes(word) &&
          titleInput.value.toLowerCase().split(" ").indexOf(word) !== 0
        ) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    titleInput.value = capitalizedTitle;
    updatePreview();
  });

// Initial preview update on page load
// Use DOMContentLoaded to ensure elements are ready before running script
document.addEventListener("DOMContentLoaded", (event) => {
  // Re-get elements inside DOMContentLoaded just in case script runs before full parse
  const urlInput = document.getElementById("urlInput");
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const keywordsInput = document.getElementById("keywordsInput");
  const capitalizeButton = document.getElementById("capitalizeButton");
  const urlPreview = document.getElementById("urlPreview");
  const titlePreview = document.getElementById("titlePreview");
  const titleLinkPreview = document.getElementById("titleLinkPreview");
  const descriptionPreview = document.getElementById("descriptionPreview");
  const faviconPreview = document.getElementById("faviconPreview");
  const mobileUrlPreview = document.getElementById("mobileUrlPreview");
  const mobileTitlePreview = document.getElementById("mobileTitlePreview");
  const mobileTitleLinkPreview = document.getElementById(
    "mobileTitleLinkPreview"
  );
  const mobileDescriptionPreview = document.getElementById(
    "mobileDescriptionPreview"
  );
  const mobileFaviconPreview = document.getElementById("mobileFaviconPreview");
  const titleCounter = document.getElementById("titleCounter");
  const descriptionCounter = document.getElementById("descriptionCounter");
  const textWidthHelper = document.getElementById("text-width-helper");

  // Add listeners again inside DOMContentLoaded
  if (urlInput) urlInput.addEventListener("input", updatePreview);
  if (titleInput) titleInput.addEventListener("input", updatePreview);
  if (descriptionInput)
    descriptionInput.addEventListener("input", updatePreview);
  if (keywordsInput) keywordsInput.addEventListener("input", updatePreview);
  if (capitalizeButton)
    capitalizeButton.addEventListener("click", () => {
      /* ... same logic ... */
    });

  updatePreview(); // Initial call
});
