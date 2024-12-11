import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, c as createAstro, h as renderSlot, j as renderHead, d as addAttribute } from './astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Bxm9vaWi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                          */

function BurgerMenu({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";
  return /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M3 6H21M3 12H21M3 18H21", stroke: `${color}`, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function CloseIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";
  return /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M3.05011 3.05011C3.23764 2.86264 3.49195 2.75732 3.75711 2.75732C4.02227 2.75732 4.27658 2.86264 4.46411 3.05011L8.00011 6.58611L11.5361 3.05011C11.7247 2.86795 11.9773 2.76716 12.2395 2.76944C12.5017 2.77172 12.7525 2.87688 12.9379 3.06229C13.1233 3.2477 13.2285 3.49851 13.2308 3.76071C13.2331 4.02291 13.1323 4.27551 12.9501 4.46411L9.41411 8.00011L12.9501 11.5361C13.1323 11.7247 13.2331 11.9773 13.2308 12.2395C13.2285 12.5017 13.1233 12.7525 12.9379 12.9379C12.7525 13.1233 12.5017 13.2285 12.2395 13.2308C11.9773 13.2331 11.7247 13.1323 11.5361 12.9501L8.00011 9.41411L4.46411 12.9501C4.27551 13.1323 4.02291 13.2331 3.76071 13.2308C3.49851 13.2285 3.2477 13.1233 3.06229 12.9379C2.87688 12.7525 2.77172 12.5017 2.76944 12.2395C2.76716 11.9773 2.86795 11.7247 3.05011 11.5361L6.58611 8.00011L3.05011 4.46411C2.86264 4.27658 2.75732 4.02227 2.75732 3.75711C2.75732 3.49195 2.86264 3.23764 3.05011 3.05011Z", fill: `${color}` }) });
}
function PlusIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z", fill: "#D3A155" }),
    /* @__PURE__ */ jsx("path", { d: "M10.5 7H13.5V17H10.5V7Z", fill: "white" }),
    /* @__PURE__ */ jsx("path", { d: "M7 10.5H17V13.5H7V10.5Z", fill: "white" })
  ] });
}
function ArrowButtonLeft({ iconFill }) {
  const color = iconFill || "white";
  return /* @__PURE__ */ jsx("svg", { width: "39", height: "46", viewBox: "0 0 39 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M37.5 42.5982L3 22.6796L37.5 2.76098L37.5 42.5982Z", stroke: color, strokeWidth: "3", id: "icon-arrow-left" }) });
}
function ArrowButtonRight({ iconFill }) {
  const color = iconFill || "white";
  return /* @__PURE__ */ jsx("svg", { width: "41", height: "46", viewBox: "0 0 41 46", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M2.58395 2.83159L37.061 22.9426L2.40579 42.7451L2.58395 2.83159Z", stroke: color, strokeWidth: "3", id: "icon-arrow-right" }) });
}
function AccordionIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-300)";
  return /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxs("g", { "clip-path": "url(#clip0_262_351)", children: [
      /* @__PURE__ */ jsx("path", { d: "M0 8.9873C0 8.43502 0.447715 7.9873 1 7.9873H15C15.5523 7.9873 16 8.43502 16 8.9873C16 9.53959 15.5523 9.9873 15 9.9873H1C0.447715 9.9873 0 9.53959 0 8.9873Z", fill: color, fillOpacity: "1" }),
      /* @__PURE__ */ jsx("path", { d: "M7 1.9873C7 1.43502 7.44772 0.987305 8 0.987305C8.55228 0.987305 9 1.43502 9 1.9873V15.9873C9 16.5396 8.55228 16.9873 8 16.9873C7.44772 16.9873 7 16.5396 7 15.9873V1.9873Z", fill: color, fillOpacity: "1" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_262_351", children: /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: color, transform: "translate(0 0.987305)" }) }) })
  ] });
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const logo = "/assets/logos/logo-westend-digital-transparant.webp";
  return renderTemplate`${maybeRenderHead()}<nav class="nav-wrapper" data-astro-cid-5blmo7yk> <div class="wrapper nav-bar" data-astro-cid-5blmo7yk> <input type="radio" name="nav-radio" class="nav-button" id="cancelButton" data-astro-cid-5blmo7yk> <input type="radio" name="nav-radio" class="nav-button" id="menuButton" data-astro-cid-5blmo7yk> <a href="/" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "alt": "logo Westend-digital", "class": "logo", "src": logo, "height": 250, "width": 250, "data-astro-cid-5blmo7yk": true })} </a> <div class="nav-list-wrapper" data-astro-cid-5blmo7yk> <ul role="list" class="nav-list" data-astro-cid-5blmo7yk> <li class="nav-link" data-astro-cid-5blmo7yk><a href="projecten" data-astro-cid-5blmo7yk>Portfolio</a></li> <li class="nav-link" data-astro-cid-5blmo7yk><a href="blog" data-astro-cid-5blmo7yk>Blog</a></li> <li class="nav-link" data-astro-cid-5blmo7yk><a href="over-ons" data-astro-cid-5blmo7yk>Over mij</a></li> <li class="nav-link" data-astro-cid-5blmo7yk><a href="contact" data-astro-cid-5blmo7yk>Contact</a></li> <li class="nav-link cta-btn" data-astro-cid-5blmo7yk><a href="/gratis-website-check" data-astro-cid-5blmo7yk>Gratis WebsiteCheck</a></li> </ul> </div> <label for="cancelButton" class="cancelButton" data-astro-cid-5blmo7yk> ${renderComponent($$result, "CloseIcon", CloseIcon, { "iconFill": "var(--clr-primary-100", "data-astro-cid-5blmo7yk": true })} </label> <label for="menuButton" class="burgerMenu" data-astro-cid-5blmo7yk> ${renderComponent($$result, "BurgerMenu", BurgerMenu, { "iconFill": "var(--clr-primary-100", "data-astro-cid-5blmo7yk": true })} </label> </div> </nav> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://westend-digital.nl/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Rythm Nation",
    description = "A demo blog for a community of music producers and enthusiasts",
    image = ""
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-702CFG42DP"><\/script><script type="text/partytown">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-702CFG42DP');
    <\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"`, "><title>", '</title><meta name="description"', '><meta property="og:image"', ">", "</head> <body> ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]));
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ArrowButtonLeft as A, PlusIcon as P, ArrowButtonRight as a, AccordionIcon as b };
