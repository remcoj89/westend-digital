import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  const email = String(form.get("email") || "")
    .trim()
    .toLowerCase();
  const firstName = String(form.get("firstName") || "").trim();
  const lastName = String(form.get("lastName") || "").trim();
  const consent = String(form.get("consent") || "") === "1"; // checkbox value "1"

  if (!email)
    return new Response(JSON.stringify({ error: "Missing email" }), {
      status: 400,
    });
  if (!consent)
    return new Response(JSON.stringify({ error: "No consent" }), {
      status: 400,
    });

  // 1) Interne notificatie (Nodemailer)
  await sendInternalMail({ email, firstName, lastName });

  // 2) Naar MailBlue/ActiveCampaign: contact + tag of lijst
  const contactId = await upsertActiveCampaignContact({
    email,
    firstName,
    lastName,
  });

  // Tag is meestal het strakst als automation-trigger:
  await addTagToContact(contactId, Number(import.meta.env.MAILBLUE_TAG_ID));

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

// --- Nodemailer ---
async function sendInternalMail(lead: {
  email: string;
  firstName: string;
  lastName: string;
}) {
  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
    secure: false,
    auth: { user: import.meta.env.SMTP_USER, pass: import.meta.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: import.meta.env.SMTP_FROM,
    to: import.meta.env.LEADS_TO,
    subject: `Nieuwe lead: ${lead.email}`,
    text: `Naam: ${lead.firstName} ${lead.lastName}\nEmail: ${lead.email}`,
  });
}

// --- ActiveCampaign API v3 (MailBlue) ---
function acBaseUrl() {
  // uit MailBlue/ActiveCampaign "Developer" settings
  return String(import.meta.env.MAILBLUE_BASE_URL).replace(/\/$/, "");
}
function acHeaders() {
  return {
    "Content-Type": "application/json",
    "Api-Token": String(import.meta.env.MAILBLUE_API_TOKEN),
  };
}

async function upsertActiveCampaignContact(input: {
  email: string;
  firstName?: string;
  lastName?: string;
}) {
  // Create contact endpoint (AC v3)
  const resp = await fetch(`${acBaseUrl()}/api/3/contacts`, {
    method: "POST",
    headers: acHeaders(),
    body: JSON.stringify({ contact: input }),
  });

  if (!resp.ok) throw new Error(await resp.text());

  const data = await resp.json();
  return Number(data.contact.id);
}

async function addTagToContact(contactId: number, tagId: number) {
  // Create contactTag endpoint
  const resp = await fetch(`${acBaseUrl()}/api/3/contactTags`, {
    method: "POST",
    headers: acHeaders(),
    body: JSON.stringify({
      contactTag: { contact: String(contactId), tag: String(tagId) },
    }),
  });

  if (!resp.ok) throw new Error(await resp.text());
}
