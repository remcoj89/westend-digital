const ORIGIN = "https://www.westend-digital.nl";

const abs = (u) => {
  if (!u) return `${ORIGIN}/`;
  if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(u) || u.startsWith("//")) return u;
  return new URL(u, ORIGIN).toString();
};

const ldBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
    { "@type": "ListItem", position: 2, name: "Tools", item: abs("/tools/") },
    {
      "@type": "ListItem",
      position: 3,
      name: "WebP Converter",
      item: abs("/tools/webp-converter/"),
    },
  ],
};

const ldSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Gratis WebP Converter",
  description:
    "Zet je afbeeldingen eenvoudig en snel om naar het moderne WebP-formaat om de laadtijd van je website te verbeteren.",
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "ImageConverter",
  operatingSystem: "Web",
  inLanguage: "nl-NL",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  url: abs("/tools/webp-converter/"),
  featureList: [
    "PNG/JPG naar WebP",
    "Batch-conversie",
    "Kwaliteit instellen (0.10–1.00)",
    "Optionele resize",
    "ZIP-download",
    "Preview",
  ],
  publisher: { "@type": "Organization", name: "Westend Digital" },
};

const ldService = {
  "@context": "https://schema.org",
  "@type": "Service",
  image: abs("/assets/logos/logo-westend-digital.webp"),
  name: "Gratis strategiegesprek",
  description:
    "Ontdek hoe je website sneller, gebruiksvriendelijker en effectiever kan worden met een gratis strategiegesprek.",
  serviceType: "Gratis strategiegesprek",
  provider: {
    "@type": "Organization",
    name: "Westend Digital",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Oosteinde 10",
      addressLocality: "Schermerhorn",
      postalCode: "1636XV",
      addressCountry: "NL",
    },
    telephone: "+31722029324",
  },
  areaServed: { "@type": "Country", name: "NL" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  potentialAction: {
    "@type": "ScheduleAction",
    target: "https://calendly.com/remco-westend-digital/30min",
  },
};

const ldFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "nl-NL",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is WebP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WebP is een modern afbeeldingsformaat ontwikkeld door Google. Het combineert de voordelen van JPG (kleine bestanden) en PNG (transparantie) en levert kleinere bestanden op zonder zichtbaar kwaliteitsverlies.",
      },
    },
    {
      "@type": "Question",
      name: "Werkt WebP in alle browsers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, vrijwel alle moderne browsers (Chrome, Firefox, Edge en Safari) ondersteunen WebP. Voor zeer oude browsers kun je een fallback instellen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel kleiner wordt mijn bestand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemiddeld zijn WebP-bestanden 25–35% kleiner dan dezelfde afbeelding in JPG of PNG, met vergelijkbare visuele kwaliteit.",
      },
    },
    {
      "@type": "Question",
      name: "Verlies ik kwaliteit bij het omzetten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dat hangt af van de kwaliteitsinstelling. De standaardwaarde 0,8 biedt een goede balans: scherpe weergave en een flink kleinere bestandsgrootte.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik meerdere afbeeldingen tegelijk converteren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Je kunt meerdere JPG- of PNG-afbeeldingen samen uploaden en in één ZIP-bestand downloaden na conversie.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe kan ik de geconverteerde WebP-afbeeldingen gebruiken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je kunt de WebP-bestanden direct uploaden in de meeste CMS’en (zoals WordPress). Controleer of je thema/plugins WebP ondersteunen of gebruik een fallback voor oudere browsers.",
      },
    },
    {
      "@type": "Question",
      name: "Is er een limiet aan het aantal afbeeldingen dat ik kan converteren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Er is geen harde limiet, maar voor de beste prestaties wordt aangeraden om batches van circa 10 afbeeldingen te gebruiken.",
      },
    },
    {
      "@type": "Question",
      name: "Helpt WebP mijn SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Kleinere bestanden versnellen je site, verbeteren de gebruikservaring en kunnen positief bijdragen aan je rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ik WebP gebruiken in WordPress, Webflow of andere CMS’en?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, de meeste moderne CMS’en ondersteunen WebP. Voor oudere setups zijn er plugins en fallbacks beschikbaar.",
      },
    },
  ],
};

export const webpSchemas = [ldBreadcrumb, ldSoftware, ldService, ldFAQ];
