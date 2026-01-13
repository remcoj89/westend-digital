import { useState, useRef } from "react";
import Styles from "./WebCheckForm.module.css";

export default function WebCheckForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef(null);

const submit = async (e) => {
  e.preventDefault();



  try {
      const formData = new FormData(formRef.current);

      const response = await fetch("/api/contactform", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setResponseMessage(data.message || "Er ging iets mis.");
        return;
      }

      setResponseMessage(data.message || "Verzonden!");
      formRef.current.reset();
  } catch (error) {
    console.error("Submit error:", error);
    setResponseMessage("Er is een fout opgetreden bij het versturen.");
  }
};


  return (
    <form ref={formRef} onSubmit={submit} className={Styles.contactForm}>
      {/* vaste backend-velden */}
      <input
        type="hidden"
        name="subject"
        value="Gratis Website Check Aanvraag"
      />
      <input type="hidden" name="message" value="Gratis Website Check" />

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
      />

      <label htmlFor="name">
        <p>
          Naam <span className={Styles.starRequired}>*</span>
        </p>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </label>

      <label htmlFor="email">
        <p>
          Email <span className={Styles.starRequired}>*</span>
        </p>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>

      <label htmlFor="domain">
        <p>
          Website <span className={Styles.starRequired}>*</span>
        </p>
        <input id="domain" name="domain" type="text" required />
      </label>

      <div className={Styles.btnWrapper}>
        <button type="submit" className={`${Styles.btn} ${Styles.btnSubmit}`}>
          Yes, doe mij die gratis website check!
        </button>

        {responseMessage ? (
          <p>{responseMessage}</p>
        ) : (
          <p>Door te klikken geef je toestemming om gecontacteerd te worden.</p>
        )}
      </div>
    </form>
  );
}
