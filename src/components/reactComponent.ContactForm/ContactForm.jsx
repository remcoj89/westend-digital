import { useState, useRef } from "react";
import Styles from "./contactForm.module.css";

export default function Form({ submitBtnText, legal, link }) {
  const [responseMessage, setReponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  async function submit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const response = await fetch("/api/contactform", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.message) {
      setReponseMessage(data.message);
    }
    if (response.status === 200) {
      formRef.current.reset();
    }
    setIsLoading(false);

  }
  return (
    <form ref={formRef} onSubmit={submit} className={Styles.contactForm}>
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
      />

      <label htmlFor="name">
        Naam
        <input
          autoComplete="name"
          id="name"
          name="name"
          pattern="[A-Za-z ]+"
          placeholder="Naam"
          type="text"
          required
        />
      </label>

      <label htmlFor="subject">
        Onderwerp
        <input
          autoComplete="subject"
          id="subject"
          name="subject"
          pattern="[A-Za-z ]+"
          placeholder="onderwerp"
          type="text"
          required
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          autoComplete="email"
          id="email"
          name="email"
          placeholder="voorbeeld@email.com"
          title="Vul een geldig email adres in"
          type="email"
          required
        />
      </label>

      <label htmlFor="message">
        Message
        <textarea
          autoComplete="off"
          id="message"
          name="message"
          placeholder="Wat je weten / vragen?"
          required
        />
      </label>

      <div className={Styles.btnWrapper}>
        <button
          aria-label="verstuur formulier"
          className={`${Styles.btn} ${Styles.btnSubmit}`}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Versturen..." : submitBtnText}
        </button>
        {(responseMessage && <p>{responseMessage}</p>) || (
          <p>
            {legal} <a href={link.href}>Algmene voorwaarden</a>
          </p>
        )}
      </div>
    </form>
  );
}
