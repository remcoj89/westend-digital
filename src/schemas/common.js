export const ORIGIN = "https://www.westend-digital.nl";

export const abs = (u) => {
  if (!u) return `${ORIGIN}/`;
  // al absoluut? (schema zoals http:, https:, mailto:, tel:, data:) of protocol-relative //...
  if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(u) || u.startsWith("//")) return u;
  // maak 'm absoluut t.o.v. ORIGIN
  return new URL(u, ORIGIN).toString();
};

const breadcrumb = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.url),
  })),
});

const organization = {
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

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: ORIGIN,
  name: "Westend Digital",
};


export const commonSchemas = [breadcrumb, organization, website]