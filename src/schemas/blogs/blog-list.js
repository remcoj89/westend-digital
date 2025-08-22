import { breadcrumb, abs } from "../common.js";

export const blogList = ({
  url = "/blog-artikelen/",
  name = "Blog",
  description,
} = {}) => [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name,
    url: abs(url),
    description,
  },
  breadcrumb([
    { name: "Home", url: "/" },
    { name, url },
  ]),
];
