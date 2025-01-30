import { useState, useRef } from "react";
import Styles from './contactForm.module.css'

export default function Form({submitBtnText, legal, link}) {
  const [responseMessage, setResponseMessage] = useState('');
  const formRef = useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch('/api/contactForm', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResponseMessage(data.message || '');
      if (response.ok) {
        formRef.current?.reset();
      } else {
        console.error("Server error:", response.status, data);
        setResponseMessage("Er is een fout opgetreden bij het versturen van het formulier.")
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResponseMessage("Er is een fout opgetreden bij het versturen van het formulier.")
    }
  };

  return (
    <form ref={formRef} onSubmit={submit} className={Styles.contactForm}>
     <label htmlFor="name">
      <p>Naam <span class={Styles.starRequired}>*</span></p>

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
        <p>Onderwerp <span class={Styles.starRequired}>*</span></p>
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
        <p>Email <span className={Styles.starRequired}>*</span></p>
        <input
          autoComplete="email"
          id="email"
          name="email"
          pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
          placeholder="voorbeeld@emaill.com"
          title="Vul een geldig email adres in"
          type="email"
          required
        />
      </label>
      <label htmlFor="message">
      <p>Bericht <span class={Styles.starRequired}>*</span></p>
        <textarea
          autoComplete="off"
          id="message"
          name="message"
          placeholder="Waarmee kan ik je helpen?"
          required
        />
      </label>


      <div className={Styles.btnWrapper}>
        <button type="submit" className={`${Styles.btn} ${Styles.btnSubmit}`} aria-label="verstuur formulier">{submitBtnText}</button>
        {
          responseMessage && <p>{responseMessage}</p> ||
          <p>{legal} <a href={link.href}>{link.title}</a></p>
        }
      </div>
    </form>
  );
}
