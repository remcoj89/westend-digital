import { organization, website, breadcrumb } from "./common.js";

export const ldHome = [
  organization,
  website,
  breadcrumb([{ name: "Home", url: "/" }]),
];
