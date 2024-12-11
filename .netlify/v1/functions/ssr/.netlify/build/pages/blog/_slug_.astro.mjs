import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_RdFGYvJp.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DE_yLWuR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://westend-digital.nl/");
async function getStaticPaths() {
  const blogs = await getCollection("blog");
  return blogs.map((blog) => ({
    params: {
      slug: blog.slug
    },
    props: {
      blogData: blog.data
    }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const blogs = await getCollection("blog");
  const blogData = blogs.find((blog) => blog.slug === slug);
  if (!blogData) {
    throw new Error("Blog not found");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog post | Westend Digital" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${blogData.data.title}</h1> <img${addAttribute(blogData.data.image, "src")}${addAttribute(500, "width")}${addAttribute(500 / 1.5, "height")}${addAttribute(blogData.data.title, "alt")}> ` })}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
