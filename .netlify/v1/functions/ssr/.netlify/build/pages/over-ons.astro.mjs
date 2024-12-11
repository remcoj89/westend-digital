import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_RdFGYvJp.mjs';
export { renderers } from '../renderers.mjs';

const $$OverOns = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Over ons | Westend Digital" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Over onst</h1> ` })}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/over-ons.astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/over-ons.astro";
const $$url = "/over-ons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OverOns,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
