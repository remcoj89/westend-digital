import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, b as renderComponent } from '../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_RdFGYvJp.mjs';
import { $ as $$Header, a as $$FooterSection } from '../chunks/FooterSection_B-IERz-f.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bxm9vaWi.mjs';
/* empty css                                 */
import { $ as $$CtaSection } from '../chunks/CtaSection_DdPvCQrH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://westend-digital.nl/");
const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project;
  const { flexDirection, projectContent } = Astro2.props;
  const { title, content, featuredImage } = await projectContent.node;
  const { altText, mediaItemUrl } = await featuredImage.node;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(flexDirection, "class")} data-astro-cid-tkm2rszc> <div class="project-content" data-astro-cid-tkm2rszc> <h2 data-astro-cid-tkm2rszc>${title}</h2> <div class="rendered-content" data-astro-cid-tkm2rszc>${unescapeHTML(content)}</div> </div> ${renderComponent($$result, "Image", $$Image, { "alt": altText, "class": "project-thumbnail", "src": mediaItemUrl, "height": 500, "width": 500, "data-astro-cid-tkm2rszc": true })} </div> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/Project.astro", void 0);

async function fetchProjects() {
  const query = `
    query getProjects {
      posts(where: {categoryId: 1}) {
        edges {
          node {
            id
            title
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("http://localhost:10003/graphql", { // Update the URL to your GraphQL endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }), // Send the query as JSON
  });

  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }

  const { data } = await res.json(); // Destructure the data from the response

  return data.posts.edges; // Return the posts from the response
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await fetchProjects();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projecten | Westend Digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> <h1>Werk waar ik trots op ben</h1> <p>Een selectie van projecten waar ik onlangs aan heb gewerkt</p> </div> ` })} <section class="wrapper"> <div class="grid"> ${projects.map((project, i) => {
    if (i % 2) {
      return renderTemplate`${renderComponent($$result2, "Project", $$Project, { "flexDirection": "flex", "projectContent": project })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "Project", $$Project, { "flexDirection": "flex-reverse", "projectContent": project })}`;
    }
  })} </div> </section> ${renderComponent($$result2, "CtaSection", $$CtaSection, {})} ${renderComponent($$result2, "FooterSection", $$FooterSection, {})} ` })}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/projecten/index.astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/projecten/index.astro";
const $$url = "/projecten";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
