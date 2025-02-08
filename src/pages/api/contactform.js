import nodemailer from "nodemailer";
export const prerender = false;

export const POST = async ({ request }) => {
  console.log('Request Headers:', request.headers.get('Content-Type'));

  const data = await request.formData();
  const name = data.get("name");
  const subject = data.get("subject");
  const email = data.get("email");
  const message = data.get("message");

  const transporter = nodemailer.createTransport({
    host: import.meta.env.EMAIL_HOST,
    port: import.meta.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: import.meta.env.EMAIL_RECIPIENT,
    subject: subject,
    text: `Naam: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Vul alle velden in",
      }),
      { status: 400 }
    );
  }
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        message: `Dank je wel ${name} ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: `Sorry ${name} er ging iets mis probeer het later nog eens`,
      }),
      { status: 500 }
    );
  }
};
