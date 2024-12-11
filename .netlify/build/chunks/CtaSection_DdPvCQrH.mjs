import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Bxm9vaWi.mjs';
import { b as $$Button } from './FooterSection_B-IERz-f.mjs';
/* empty css                         */

const $$CtaSection = createComponent(($$result, $$props, $$slots) => {
  const ctaImage = "/images/remco.png";
  return renderTemplate`${maybeRenderHead()}<section class="fb-col-wrapper" id="cta-section" data-astro-cid-caofqyme> <div class="cta-content" data-astro-cid-caofqyme> <h2 class="cta-title" data-astro-cid-caofqyme>Klaar om jouw online succes te versnellen?</h2> <div class="btn-wrapper" data-astro-cid-caofqyme> ${renderComponent($$result, "Button", $$Button, { "type": "button", "buttonStyle": "btn-secondary", "data-astro-cid-caofqyme": true }, { "default": ($$result2) => renderTemplate`Bel me` })} ${renderComponent($$result, "Button", $$Button, { "type": "button", "buttonStyle": "btn-secondary-open", "data-astro-cid-caofqyme": true }, { "default": ($$result2) => renderTemplate`Stuur een email` })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "alt": "Remco Jonk", "class": "cta-image", "src": ctaImage, "height": 500, "width": 500, "data-astro-cid-caofqyme": true })} </section> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/CtaSection.astro", void 0);

export { $$CtaSection as $ };
