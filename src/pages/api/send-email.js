export const prerender = false;

import nodemailer from "nodemailer";

export async function POST({ request }) {
  const formData = await request.json();
  const { naam, email, subject } = formData;

  if (!naam || !email) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Naam en e-mail zijn verplicht.",
      }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: import.meta.env.SMTP_PORT,
    secure: true,
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Form" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.SMTP_RECIEVER,
      subject: subject || "Nieuw formulier ingediend ✔️",
      text: `Naam: ${naam}\nE-mail: ${email}`,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Fout bij verzenden e-mail:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Fout bij verzenden e-mail" }),
      { status: 500 }
    );
  }
}
