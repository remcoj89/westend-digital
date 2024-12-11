import { a as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderSlot, c as createAstro, d as addAttribute, b as renderComponent } from './astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                                        */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Bxm9vaWi.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> ${renderSlot($$result, $$slots["default"])} </header> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://westend-digital.nl/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    buttonStyle = "btn-primary",
    buttonType = "button",
    buttonId
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(buttonType, "type")}${addAttribute(`btn ${buttonStyle}`, "class")}${addAttribute(buttonId, "id")}> ${renderSlot($$result, $$slots["default"])} </button> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/Button.astro", void 0);

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="fb-col-wrapper" data-astro-cid-dhv7xp44> <div class="logo-section" data-astro-cid-dhv7xp44> <a href="/" data-astro-cid-dhv7xp44> ${renderComponent($$result, "Image", $$Image, { "alt": "logo Westend digital", "class": "footer-image", "height": 500, "src": "/assets/logos/WestendDigitalLogo.svg", "width": 500, "data-astro-cid-dhv7xp44": true })} </a> <p data-astro-cid-dhv7xp44>
Ik help ambitieuze ondernemers om hun online doelen te bereiken. Met een doordachte strategie en technisch sterke website help ik die doelen om te zetten in concrete resultaten. Geen loze beloftes, maar meetbare groei voor jouw bedrijf.
</p> </div> <div class="links" data-astro-cid-dhv7xp44> <div data-astro-cid-dhv7xp44> <h4 data-astro-cid-dhv7xp44>Sitemap</h4> <ul role="list" data-astro-cid-dhv7xp44> <li data-astro-cid-dhv7xp44><a href="/" data-astro-cid-dhv7xp44>Home</a></li> <li data-astro-cid-dhv7xp44><a href="/gratis-website-check" data-astro-cid-dhv7xp44>Gratis Website Check</a></li> <li data-astro-cid-dhv7xp44><a href="/over-mij" data-astro-cid-dhv7xp44>Over mij</a></li> <li data-astro-cid-dhv7xp44><a href="/contact" data-astro-cid-dhv7xp44>contact</a></li> </ul> </div> <div data-astro-cid-dhv7xp44> <h4 data-astro-cid-dhv7xp44>Contact</h4> <ul role="list" id="contact-list" data-astro-cid-dhv7xp44> <li data-astro-cid-dhv7xp44> <h5 data-astro-cid-dhv7xp44>Adress</h5> <p data-astro-cid-dhv7xp44>Oosteinde 10</p> <p data-astro-cid-dhv7xp44>1636XV Schermerhorn</p> </li> <li data-astro-cid-dhv7xp44> <p data-astro-cid-dhv7xp44></p> </li> <li data-astro-cid-dhv7xp44> <h5 data-astro-cid-dhv7xp44>Neem contact met mij op</h5> <p data-astro-cid-dhv7xp44>Email: <a href="mailto:info@westend-digital.nl" data-astro-cid-dhv7xp44>info@westend-digital.nl</a></p> <p data-astro-cid-dhv7xp44>Telefoon: <a href="tel:+31623927717" data-astro-cid-dhv7xp44>+316-23927717</a> </p></li> <li data-astro-cid-dhv7xp44> <p data-astro-cid-dhv7xp44>KVK: 88994791</p> <p data-astro-cid-dhv7xp44>BTW: NL004680898B61</p> </li> </ul> </div> </div> </footer> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/FooterSection.astro", void 0);

export { $$Header as $, $$FooterSection as a, $$Button as b };
