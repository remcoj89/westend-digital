export const ORIGIN = "https://www.westend-digital.nl";

export const abs = (u) => {
  if (!u) return `${ORIGIN}/`;
  if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(u) || u.startsWith("//")) return u;
  return new URL(u, ORIGIN).toString();
};

export const breadcrumb = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.url),
  })),
});

export const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Westend Digital",
  url: ORIGIN,
  email: "info@westend-digital.nl",
  telephone: "+31722029324",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oosteinde 10",
    addressLocality: "Schermerhorn",
    postalCode: "1636XV",
    addressCountry: "NL",
  },
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: ORIGIN,
  name: "Westend Digital",
};

// ✅ breadcrumb aanroepen i.p.v. functie doorgeven
export const commonSchemas = [
  breadcrumb([{ name: "Home", url: "/" }]),
  organization,
  website,
];
