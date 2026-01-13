import nodemailer from "nodemailer";

export const prerender = false;

export const POST = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name");
  const subject = data.get("subject");
  const email = data.get("email");
  const message = data.get("message");
  const honeypot = data.get("company");

  /* 1. Honeypot check */
  if (honeypot) {
    return new Response( JSON.stringify({ message: "Forbidden" }),
  { status: 403, headers: { "Content-Type": "application/json" } } );
  }


  /* 2. Validatie */
  if (!name || !email || !subject || !message || message.length < 10) {
    return new Response(
      JSON.stringify({ message: "Vul alle velden correct in" }),
      { status: 400 }
    );
  }

  /* 3. Mail versturen */
  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
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
      subject,
      text: `Naam: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(
      JSON.stringify({
        message: `Dank je wel ${name}, ik heb je bericht ontvangen.`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Er ging iets mis. Probeer het later opnieuw.",
      }),
      { status: 500 }
    );
  }
};
