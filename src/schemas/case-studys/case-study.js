import { abs, breadcrumb } from "../common.js";

export const caseStudyList = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case studies",
    url: abs("/case-studies/"),
  },
  breadcrumb([
    { name: "Home", url: "/" },
    { name: "Case studies", url: "/case-studies/" },
  ]),
];

export function caseStudyDetail({
  title,
  url,
  image,
  description,
  client,
  datePublished,
  dateModified,
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      headline: title,
      description,
      about: client,
      mainEntityOfPage: abs(url),
      image: image ? [abs(image)] : undefined,
      inLanguage: "nl-NL",
      datePublished,
      dateModified,
      author: { "@type": "Organization", name: "Westend Digital" },
    },
    breadcrumb([
      { name: "Home", url: "/" },
      { name: "Case studies", url: "/case-studies/" },
      { name: title, url },
    ]),
  ];
}
