import { abs, breadcrumb } from "../common.js";

export function blogPosting({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  tags,
}) {
  const item = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    mainEntityOfPage: abs(url),
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: "Westend Digital",
      logo: {
        "@type": "ImageObject",
        url: abs("/assets/logos/WestendDigitalLogo.svg"),
      },
    },
    image: image ? [abs(image)] : undefined,
    inLanguage: "nl-NL",
    keywords: Array.isArray(tags) ? tags.join(", ") : undefined,
  };
  return [item];
}

export const blogPostBreadcrumb = (title, url) =>
  breadcrumb([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog-artikelen/" },
    { name: title, url },
  ]);
