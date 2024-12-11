import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_RdFGYvJp.mjs';
import { $ as $$Header, a as $$FooterSection } from '../chunks/FooterSection_B-IERz-f.mjs';
import { $ as $$CtaSection } from '../chunks/CtaSection_DdPvCQrH.mjs';
import { g as getCollection } from '../chunks/_astro_content_DE_yLWuR.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Westend Digital", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-5tznm7mj>Blog</h1> ` })} <section class="fb-col-wrapper" data-astro-cid-5tznm7mj> <div class="blog-list" data-astro-cid-5tznm7mj> ${blogs.map((blog) => renderTemplate`<a${addAttribute(`/blog/${blog.slug}`, "href")} data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>${blog.data.title}</h2> <img${addAttribute(blog.data.image, "src")}${addAttribute(500, "width")}${addAttribute(500, "height")}${addAttribute(blog.data.title, "alt")} data-astro-cid-5tznm7mj> <p data-astro-cid-5tznm7mj></p> </a>`)} </div> </section> ${renderComponent($$result2, "CtaSection", $$CtaSection, { "data-astro-cid-5tznm7mj": true })} ${renderComponent($$result2, "FooterSection", $$FooterSection, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/blog/index.astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
