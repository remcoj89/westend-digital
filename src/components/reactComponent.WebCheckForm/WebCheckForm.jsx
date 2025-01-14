import { useState, useRef} from 'react';
import Styles from './WebCheckForm.module.css';

export default function WebCheckForm() {
  const [responseMessage, setResponseMessage] = useState('');
  const formRef = useRef(null);

  const submit = async (e) => { // Maak submit een const
    e.preventDefault();
    const formData = new FormData(formRef.current); // Gebruik formRef.current
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
      <input type="hidden" name="subject" value="Gratis Website Check Aanvraag" />
      <input type="hidden" name="message" value="Gratis Website Check" />
       <div className="flex">
         <label htmlFor="name">
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
         <label htmlFor="lastName">
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
       <div className="flex">
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
             autoComplete="phone"
             id="phone"
             name="phone"
             pattern="[0-9+-]"
             title="Voer een geldig telefoonnummer in (bijv. 0101234567, 0612345678, +31101234567)."
             placeholder="06-12345678"
             type="phone"
             required
           />
         </label>
       </div>
       <div className="flex">
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
             name="domain"
             pattern="^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$"
             placeholder="www.jouw-bedrijf.nl"
             type="text"
             title="Voer een geldige domeinnaam in."
             required
           />
         </label>
       </div>
       <div className={Styles.btnWrapper}>
         <button type="submit" className={`${Styles.btn} ${Styles.btnSubmit}`}>Yes doe mij die gratis website check maar!</button>
         {
           responseMessage && <p>{responseMessage}</p> ||
           <p>Door op bovenstaande knop te klikken, geef je Westend Digital toesteming om jou te contacteren en   meld je je aan voor onze nieuwsbrief Je contact gegevens worden conform het <a href="/">privacybeleid</a> van Westend Digital verwerkt.</p>
         }
       </div>
    </form>
  )
}
