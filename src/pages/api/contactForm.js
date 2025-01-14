import nodemailer from 'nodemailer';

export const POST = async ({request}) => {
  const data = await request.formData()
  const name = data.get("name")
  const lastName = data.get("lastName")
  const subject = data.get("subject")
  const email = data.get("email")
  const domain = data.get("domain")
  const company = data.get("company")
  const phone = data.get("phone")
  const message = data.get("message")

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} ${lastName} <${email}>`,
    replyTo: email,
    to: import.meta.env.EMAIL_RECIPIENT,
    subject: subject,
    html: `
    <div style="font-family: Arial, sans-serif; font-size: 16px;">
      <p>Je hebt een nieuw bericht van ${name} ${lastName} </p>
      <p><b>Onderwerp:</b> ${subject}</p>
      <p><b>Bedrijf:</b> ${company}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Website:</b> ${domain}</p>
      <p><b>Telefoon:</b> ${phone}</p>
      <p><b>Bericht:</b> ${message}</p>
    </div>
  `
  };

    // Validate the data - you'll probably want to do more than this
    if(!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Vul alle velden in"
        }),
        {status: 400}
      )
    }

    try {
      await transporter.sendMail(mailOptions);
      return new Response(
        JSON.stringify({
          message: `Dank je wel ${name} ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op`
        }),
        { status: 200 }
      );;
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({
        message: `Sorry ${name} er ging iets mis probeer het later nog eens`
      }), { status: 500 });
    }

}
