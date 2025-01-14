import { useState, useRef} from 'react';
import Styles from './WebCheckForm.module.css';

export default function WebCheckForm() {
  const [responseMessage, setReponseMessage] = useState("")
  const formRef = useRef(null);

  async function submit(e) {
    e.preventDefault();
  }

  return (
       <form ref={formRef} onSubmit={submit} className={Styles.contactForm}>

          <div class="flex">
            <label htmlFor="phone">
              Voornaam
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
            <label htmlFor="company">
              Bedrijf
              <input
                autoComplete="company"
                id="company"
                name="company"
                pattern="[A-Za-z ]+"
                placeholder="Bedrijf"
                type="text"
                required
              />
            </label>
            <label htmlFor="phone">
              Telefoon
              <input
                autoComplete="lastphone"
                id="phone"
                name="phone"
                pattern="((\+|00)31|0)?(6|([1-9][0-9]))([0-9]{7,8})"
                title="Voer een geldig telefoonnummer in (bijv. 0101234567, 0612345678, +31101234567)."
                placeholder="06-12345678"
                type="phone"
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
            <label htmlFor="domain">
              Website
              <input
                autoComplete="domain"
                id="domain"
                name="website"
                pattern="^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\.)+[a-zA-Z]{2,}$"
                placeholder="www.jouw-bedrijf.nl"
                type="text"
                title="Voer een geldige domeinnaam in."
                required
              />
            </label>
          </div>



       <div className={Styles.btnWrapper}>
         <button type="submit" className={`${Styles.btn} ${Styles.btnPrimary}`}>Yes doe mij die gratis website check maar!</button>
         {
           responseMessage && <p>{responseMessage}</p> ||
           <p>Door op bovenstaande knop te klikken, geef je Westend Digital toesteming om jou te contacteren en meld je je aan voor onze nieuwsbrief Je contact gegevens worden conform het <a href="/">privacybeleid</a> van Westend Digital verwerkt.</p>
         }
       </div>

    </form>
  )
}
