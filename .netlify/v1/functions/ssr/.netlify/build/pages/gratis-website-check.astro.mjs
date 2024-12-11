import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { P as PlusIcon, $ as $$Layout } from '../chunks/Layout_RdFGYvJp.mjs';
import { b as $$Button, $ as $$Header, a as $$FooterSection } from '../chunks/FooterSection_B-IERz-f.mjs';
import { $ as $$SectionTitle, a as $$IntroSection, b as $$FaqSection } from '../chunks/FaqSection_BN_pc8Wx.mjs';
import 'clsx';
/* empty css                                                */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://westend-digital.nl/");
const $$FormInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormInput;
  const {
    label,
    inputType = "text",
    placeHolder,
    name,
    id,
    formStyle = "default"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(name, "for")}${addAttribute(formStyle, "class")} class="formStyle" data-astro-cid-j24l4rnk> ${label} <input${addAttribute(inputType, "type")}${addAttribute(name, "name")}${addAttribute(placeHolder, "placeholder")} data-astro-cid-j24l4rnk> </label> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/FormInput.astro", void 0);

const $$WebCheckForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="submit" data-astro-cid-ijt63rfi> <div class="double-field" data-astro-cid-ijt63rfi> ${renderComponent($$result, "FormInput", $$FormInput, { "label": "Voornaam", "name": "name", "inpytType": "text", "placeholder": "Voornaam", "formStyle": "default", "data-astro-cid-ijt63rfi": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "label": "Achternaam", "name": "last-name", "inpytType": "text", "placeholder": "Achternaam", "formStyle": "default", "data-astro-cid-ijt63rfi": true })} </div> <div class="double-field" data-astro-cid-ijt63rfi> ${renderComponent($$result, "FormInput", $$FormInput, { "label": "Bedrijf", "name": "company", "inpytType": "text", "placeholder": "Bedrijf", "formStyle": "default", "data-astro-cid-ijt63rfi": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "label": "Telefoon", "name": "phone", "inpytType": "tel", "placeholder": "Telefoon", "formStyle": "default", "data-astro-cid-ijt63rfi": true })} </div> <div class="double-field" data-astro-cid-ijt63rfi> ${renderComponent($$result, "FormInput", $$FormInput, { "label": "E-mail", "name": "email", "inpytType": "mail", "placeholder": "bedrijfsnaam@email.nl", "formStyle": "default", "data-astro-cid-ijt63rfi": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "label": "Website", "name": "website", "inpytType": "url", "placeholder": "www.jouw-website.nl", "formStyle": "default", "data-astro-cid-ijt63rfi": true })} </div> ${renderComponent($$result, "Button", $$Button, { "buttonType": "submit", "buttonStyle": "btn-secondary", "data-astro-cid-ijt63rfi": true }, { "default": ($$result2) => renderTemplate`Yes, doe mij die gratis website check maar!` })} <p class="legal-text" data-astro-cid-ijt63rfi>Door op bovenstaande knop te klikken, geef je Westend Digital toesteming om jou te contacteren en meld je je aan voor onze nieuwsbrief
    Je contact gegevens worden conform het <a href="#" data-astro-cid-ijt63rfi>privacybeleid</a> van Westend Digital verwerkt.</p> </form> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/WebCheckForm.astro", void 0);

const $$Astro = createAstro("https://westend-digital.nl/");
const $$WebCheckFormSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WebCheckFormSection;
  const {
    paragraph,
    uspList,
    ctaText,
    ctaButton
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="wrapper flex" data-astro-cid-24eqjqby> ${renderComponent($$result, "WebCheckForm", $$WebCheckForm, { "data-astro-cid-24eqjqby": true })} <div data-astro-cid-24eqjqby> <p data-astro-cid-24eqjqby>${paragraph}</p> <ul role="list" data-astro-cid-24eqjqby> ${uspList.map((item) => {
    return renderTemplate`<li data-astro-cid-24eqjqby>${renderComponent($$result, "PlusIcon", PlusIcon, { "data-astro-cid-24eqjqby": true })} <span data-astro-cid-24eqjqby>${item}</span></li>`;
  })} </ul> <p data-astro-cid-24eqjqby>${ctaText}</p> </div> </section> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/WebCheckFormSection.astro", void 0);

const $$WebCheckHowWeWorkSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="fb-col-wrapper" id="steps" data-astro-cid-psxhd6zk> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionTitle": "Zo pak ik het aan", "data-astro-cid-psxhd6zk": true })} <div class="steps-wrapper" data-astro-cid-psxhd6zk> <ul role="list" class="steps-list" data-astro-cid-psxhd6zk> <li data-astro-cid-psxhd6zk> <div class="list-title" data-astro-cid-psxhd6zk> <span data-astro-cid-psxhd6zk>1</span> <h3 data-astro-cid-psxhd6zk>Grondige scan van je website</h3> </div> <p data-astro-cid-psxhd6zk>Ik duik in je website en analyseer alles: van design tot techniek. Hoe gebruiksvriendelijk is je site? Werkt hij goed op alle apparaten? En belangrijker nog: spreekt hij de taal van je klanten?</p> </li> <li data-astro-cid-psxhd6zk> <div class="list-title" data-astro-cid-psxhd6zk> <span data-astro-cid-psxhd6zk>2</span> <h3 data-astro-cid-psxhd6zk>Telefonisch contact binnen 2 werkdagen</h3> </div> <p data-astro-cid-psxhd6zk>Geen lange wachttijden - binnen 2 werkdagen bel ik je om een persoonlijk gesprek in te plannen. Ik deel mijn bevindingen en luister naar jouw verhaal. Want alleen zo kunnen we bepalen wat écht belangrijk is voor jouw bedrijf.</p> </li> <li data-astro-cid-psxhd6zk> <div class="list-title" data-astro-cid-psxhd6zk> <span data-astro-cid-psxhd6zk>3</span> <h3 data-astro-cid-psxhd6zk>Vrijblijvend advies op maat </h3> </div> <p data-astro-cid-psxhd6zk>Je krijgt van mij concrete verbeterpunten, geen vaag marketingverhaal. Ik vertel je eerlijk wat goed gaat én waar kansen liggen. En het mooiste? Je bepaalt zelf wat je met dit advies doet.</p> </li> <li data-astro-cid-psxhd6zk> <div class="list-title" data-astro-cid-psxhd6zk> <span data-astro-cid-psxhd6zk>4</span> <h3 data-astro-cid-psxhd6zk>Aan de slag met jouw groeiplan</h3> </div> <p data-astro-cid-psxhd6zk>Wil je de verbeteringen doorvoeren? Dan maken we samen een helder plan. Stap voor stap werken we aan een website die wél aansluit bij jouw ambities - en die van je klanten.</p> </li> </ul> <div class="btn-wrapper" data-astro-cid-psxhd6zk> ${renderComponent($$result, "Button", $$Button, { "buttonStyle": "btn-secondary", "data-astro-cid-psxhd6zk": true }, { "default": ($$result2) => renderTemplate`Vraag een gratis Check aan` })} </div> </div> </section> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/WebCheckHowWeWorkSection.astro", void 0);

const $$GratisWebsiteCheck = createComponent(($$result, $$props, $$slots) => {
  const pageContent = {
    metaTitle: "",
    metaDescription: "",
    pageTitle: "Ontdek wat je website nu voor je doet \xE9n wat er beter kan",
    introSection: {
      title: "",
      paragraph: "Je bent hard gegroeid als ondernemer, maar is je website mee gegroeid? Grote kans van niet. Die zweeft waarschijnlijk nog ergens in het tijdperk van toen websites nog digitale visitekaartjes waren. Terwijl je website juist \xE9\xE9n van je beste verkopers kan zijn - eentje die 24/7 voor je werkt om nieuwe klanten aan te trekken.",
      imageUrl: "/images/about-image.png",
      altText: ""
    },
    formSection: {
      paragraph: "Tijd voor verandering dus! Ik neem graag je website eens onder de loep. Na de check weet je precies:",
      uspList: ["waar je website kansen laat liggen", "hoe je meer klanten uit je website haalt", "wat er nodig is om je online groei te versnellen"],
      ctaText: "Geen theoretische taal, maar praktische tips waar je morgen al mee aan de slag kunt.",
      ctaButton: "Yes, doe mij die gratis website check maar!"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gratis website check | Westend Digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> <h1>${pageContent.pageTitle}</h1> </div> ` })} ${renderComponent($$result2, "IntroSection", $$IntroSection, { "altText": pageContent.introSection.altText, "imageUrl": pageContent.introSection.imageUrl, "paragraph": pageContent.introSection.paragraph, "title": pageContent.introSection.title })} ${renderComponent($$result2, "WebCheckFormSection", $$WebCheckFormSection, { "paragraph": pageContent.formSection.paragraph, "uspList": pageContent.formSection.uspList, "ctaText": pageContent.formSection.ctaText, "ctaButton": pageContent.formSection.ctaButton })} ${renderComponent($$result2, "WebCheckHowWeWorkSection", $$WebCheckHowWeWorkSection, {})} ${renderComponent($$result2, "FaqSection", $$FaqSection, { "sectionId": "webcheck-faq" })} ${renderComponent($$result2, "FooterSection", $$FooterSection, {})} ` })}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/gratis-website-check.astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/gratis-website-check.astro";
const $$url = "/gratis-website-check";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GratisWebsiteCheck,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
