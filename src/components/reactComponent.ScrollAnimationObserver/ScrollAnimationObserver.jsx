// src/components/ScrollAnimationObserver.jsx
import React, { useEffect } from "react";

// Dit component heeft geen props nodig, dus we laten de haakjes leeg.
const ScrollAnimationObserver = () => {
  // useEffect voert de code uit nadat het component is gerenderd.
  // De lege afhankelijkheidsarray `[]` zorgt ervoor dat het maar één keer gebeurt,
  // vergelijkbaar met componentDidMount.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Optioneel: als je wilt dat de animatie maar één keer afspeelt:
          // observer.unobserve(entry.target);
        }
      });
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section, i) => {
      if (i !== 0) {
        // De eerste sectie heeft geen 'hidden' nodig
        section.classList.add("hidden");
      }
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup-functie: dit wordt uitgevoerd wanneer het component uit de DOM wordt verwijderd.
    // Dit is belangrijk om memory leaks te voorkomen, hoewel voor deze observer
    // het minder kritisch is omdat het over de hele pagina werkt.
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect(); // Stopt de observer volledig
    };
  }, []); // Lege array betekent: run dit effect slechts één keer na de eerste render.

  // Het component zelf rendert niets zichtbaars, alleen de JavaScript-logica.
  return null; // Of een lege <div> als je een DOM-element nodig hebt
};

export default ScrollAnimationObserver;
