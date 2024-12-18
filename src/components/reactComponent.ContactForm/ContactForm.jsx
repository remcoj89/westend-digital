import { useState, useRef } from "react";
import Styles from './contactForm.module.css'

export default function Form() {
  const [responseMessage, setReponseMessage] = useState("")
  const formRef = useRef(null);

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const response = await fetch("/api/contactForm", {
      method: "POST",
      body: formData
    })

    const data = await response.json()
    if(data.message) {
      setReponseMessage(data.message)
    }
    if (response.status === 200) { // Check for success in the response
      formRef.current.reset();
    }
  }

  return (
    <form ref={formRef} onSubmit={submit} className={Styles.contactForm}>
      <div class="flex">
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
        <label htmlFor="name">
          Achternaam
          <input
            autoComplete="lastName"
            id="lastName"
            name="lastName"
            pattern="[A-Za-z ]+"
            placeholder="Achternaam"
            type="text"
            required
          />
        </label>
      </div>

      <div class="flex">
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
      </div>

      <div class="flex">
        <label htmlFor="email">
          Email
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
        <label htmlFor="phone">
          Telefoon
          <input
            autoComplete="phone"
            id="phone"
            name="phone"
            pattern="[0-9+-]"
            placeholder="06-12345678"
            type="tel"
            required
          />
        </label>
      </div>

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
        <button type="submit" className={`${Styles.btn} ${Styles.btnPrimary}`}>Send</button>
        {
          responseMessage && <p>{responseMessage}</p> ||
          <p>Door dit formulier te verzenden ga je akkoord met onze <a href="">Algmene voorwaarden</a></p>
        }
      </div>


    </form>
  );
}
