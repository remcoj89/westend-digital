import nodemailer from "nodemailer";

export const prerender = false;

export const POST = async ({ request }) => {
  const data = await request.formData();

  /* -----------------------------
     1. Data ophalen + normaliseren
  ------------------------------ */
  const name = data.get("name")?.toString().trim();
  const subject = data.get("subject")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  const honeypot = data.get("company");
  const formLoadTimeRaw = data.get("formLoadTime");
  const formLoadTime = Number(formLoadTimeRaw);

  /* -----------------------------
     2. Honeypot check (stil afkappen)
  ------------------------------ */
  if (honeypot) {
    return new Response(JSON.stringify({ message: "OK" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  /* -----------------------------
     3. Time-based bot check
  ------------------------------ */
  if (!formLoadTime || Number.isNaN(formLoadTime)) {
    return new Response(JSON.stringify({ message: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (Date.now() - formLoadTime < 3000) {
    return new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  /* -----------------------------
     4. Validatie & sanitatie
  ------------------------------ */
  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    message.length < 10 ||
    message.length > 2000
  ) {
    return new Response(
      JSON.stringify({ message: "Vul alle velden correct in" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  /* -----------------------------
     5. Nodemailer configuratie
  ------------------------------ */
  const port = Number(import.meta.env.SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASS,
    },
  });

  /* -----------------------------
     6. Mail versturen
  ------------------------------ */
  try {
    await transporter.sendMail({
      from: `"Website Form" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.SMTP_RECIEVER,
      replyTo: email,
      subject,
      text: `Naam: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(
      JSON.stringify({
        message: `Dank je wel ${name}, ik heb je bericht ontvangen.`,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        message: "Er ging iets mis. Probeer het later opnieuw.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
