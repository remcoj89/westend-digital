import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_RdFGYvJp.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="submit"></form>`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Westend Digital" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Contact</h1> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </section> ` })}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/contact.astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
