import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderSlot, b as renderComponent, i as renderScript } from '../chunks/astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { P as PlusIcon, A as ArrowButtonLeft, a as ArrowButtonRight, $ as $$Layout } from '../chunks/Layout_RdFGYvJp.mjs';
import { b as $$Button, $ as $$Header, a as $$FooterSection } from '../chunks/FooterSection_B-IERz-f.mjs';
import { $ as $$SectionTitle, a as $$IntroSection, b as $$FaqSection } from '../chunks/FaqSection_BN_pc8Wx.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bxm9vaWi.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$CtaSection } from '../chunks/CtaSection_DdPvCQrH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://westend-digital.nl/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { cardStyle = "primary" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card ${cardStyle}`, "class")} data-astro-cid-dohjnao5> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/Card.astro", void 0);

const $$UspSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Waarom kies je voor Westend Digital?";
  const usps = [
    {
      iconUrl: "/images/digital-succes.webp",
      altText: "",
      title: "Jouw digitale succes als product",
      text: "Een effectieve website draait om drie pijlers: de juiste techniek, een doelgerichte strategie en meetbare resultaten. Ik werk met een duidelijk plan, concrete doelen en een transparant proces. Zo zie je precies hoe we jouw digitale succes gaan realiseren."
    },
    {
      iconUrl: "/images/meer-dan-een-website.webp",
      altText: "",
      title: "M\xE9\xE9r dan een website",
      text: "Ik bouw niet alleen je website - ik ben ook je sparringpartner voor je digitale groei. Door jouw bedrijf en doelgroep \xE9cht te begrijpen, cre\xEBer ik een online aanwezigheid die aansluit bij jouw doelen. We bouwen samen aan je groei: nu \xE9n in de toekomst. "
    },
    {
      iconUrl: "/images/groei-motor.webp",
      altText: "",
      title: "Je website als groeimotor",
      text: "Je wilt niet alleen een website die er professioneel uitziet, maar een platform dat meegroeit met je ambities. Ik bouw websites met het grotere plaatje in gedachten: een strategisch fundament dat je bedrijf versterkt. Geen holle woorden, wel meetbare resultaten."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="wrapper" id="usp-section" data-astro-cid-coh77mra> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionTitle": title, "data-astro-cid-coh77mra": true })} <div class="usp-wrapper" data-astro-cid-coh77mra> ${usps.map((usp) => {
    return renderTemplate`${renderComponent($$result, "Card", $$Card, { "cardStyle": "primary", "data-astro-cid-coh77mra": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "alt": usp.altText, "height": 250, "src": usp.iconUrl, "width": 250, "data-astro-cid-coh77mra": true })} <h3 data-astro-cid-coh77mra>${usp.title}</h3> <p data-astro-cid-coh77mra>${usp.text}</p> ` })}`;
  })} </div> </section> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/UspSection.astro", void 0);

const $$HowWeWorkSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Zo bouw ik aan jouw online succes";
  const steps = [
    {
      listTitle: "Boek een gesprek",
      title: "Kennismakingsgesprek",
      steps: [
        "Ik leer je graag kennen: wie ben je, wat zijn je uitdagingen en wat is je doel?",
        "Hoe kan je website je helpen om die stip op de horizon te bereiken?"
      ],
      imageUrl: "/images/kennismaking.png",
      altText: "Remco in een video call"
    },
    {
      listTitle: "Strategie",
      title: "Strategie bepalen",
      steps: [
        "We duiken in je doelgroep: wie zijn ze en wat zoeken ze online?",
        "Samen maken we een plan: hoe genereer je (meer) leads met je website",
        "Je krijgt een heldere roadmap: zo gaan we jouw online doelen halen"
      ],
      imageUrl: "/images/kennismaking.png",
      altText: "Remco in een video call"
    },
    {
      listTitle: "Ontwerp",
      title: "Ontwerp",
      steps: [
        "Je krijgt een design dat niet alleen mooi is, maar dat vooral werkt voor je klanten",
        "We focussen op gebruiksgemak en conversie: elke bezoeker telt",
        "Het resultaat? Een website die je doelgroep aanspreekt \xE9n die past bij je bedrijf "
      ],
      imageUrl: "/images/kennismaking.png",
      altText: "Remco in een video call"
    },
    {
      listTitle: "Ontwikkeling",
      title: "Website bouwen",
      steps: [
        "Vervolgens bouw ik je website met oog voor techniek, snelheid en veiligheid",
        "Alle functionaliteiten worden precies zo gebouwd als jij ze nodig hebt",
        "Ik werk samen met professionals om voor jou een website te bouwen die niet  alleen n\xFA werkt, maar ook in de toekomst"
      ],
      imageUrl: "/images/kennismaking.png",
      altText: "Remco in een video call"
    },
    {
      listTitle: "Lanceren",
      title: "Live gaan",
      steps: [
        "We testen alles grondig voor de lancering",
        "Je website wordt geoptimaliseerd voor zoekmachines",
        "Als je wilt, leer ik je hoe je zelf content kunt beheren "
      ],
      imageUrl: "/images/kennismaking.png",
      altText: "Remco in een video call"
    },
    {
      listTitle: "Door ontwikkelen",
      title: "Door ontwikkelen",
      steps: [
        "Je website blijft up-to-date met regelmatige updates en verbeteringen",
        "Ik monitor de prestaties en optimaliseer waar nodig"
      ],
      imageUrl: "/images/kennismaking.png",
      altText: "Remco in een video call"
    }
  ];
  const iconColor = "var(--clr-primary-500)";
  const iconColorActive = "var(--clr-primary-300)";
  return renderTemplate`${maybeRenderHead()}<section class="fb-col-wrapper" id="how-we-work" data-astro-cid-tatvrzyo> <div class="steps-list-wrapper" data-astro-cid-tatvrzyo> <h2 data-astro-cid-tatvrzyo>${title}</h2> <ul role="list" class="steps-list" data-astro-cid-tatvrzyo> ${steps.map((step, i) => {
    return renderTemplate`<li class="step" data-astro-cid-tatvrzyo>0${i + 1} ${step.listTitle}</li>`;
  })} </ul> <a href="/contact" class="btn btn-primary" data-astro-cid-tatvrzyo>
Vrijblijvende afspraak
</a> </div> <div class="steps" data-astro-cid-tatvrzyo> <div class="steps-container" data-astro-cid-tatvrzyo> ${steps.map((step, i) => {
    return renderTemplate`<div class="steps-wrapper" data-astro-cid-tatvrzyo> <div class="steps-content" data-astro-cid-tatvrzyo> <h2 data-astro-cid-tatvrzyo>${step.title}</h2> <ul role="list" data-astro-cid-tatvrzyo> ${step.steps.map((s) => {
      return renderTemplate`<li class="list-item" data-astro-cid-tatvrzyo><div class="steps-icon" data-astro-cid-tatvrzyo>${renderComponent($$result, "PlusIcon", PlusIcon, { "data-astro-cid-tatvrzyo": true })}</div><p data-astro-cid-tatvrzyo>${s}</p></li>`;
    })} </ul> </div> ${renderComponent($$result, "Image", $$Image, { "alt": step.altText, "class": "steps-image", "height": "300", "src": step.imageUrl, "width": "300", "data-astro-cid-tatvrzyo": true })} </div>`;
  })} </div> <div class="btn-wrapper" data-astro-cid-tatvrzyo> ${renderComponent($$result, "Button", $$Button, { "buttonStyle": "arrow-btn", "buttonId": "btn-previous", "data-astro-cid-tatvrzyo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArrowButtonLeft", ArrowButtonLeft, { "iconFill": iconColor, "data-astro-cid-tatvrzyo": true })} ` })} ${renderComponent($$result, "Button", $$Button, { "buttonStyle": "arrow-btn", "buttonId": "btn-next", "data-astro-cid-tatvrzyo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArrowButtonRight", ArrowButtonRight, { "iconFill": iconColorActive, "data-astro-cid-tatvrzyo": true })} ` })} </div> </div> </section> ${renderScript($$result, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/HowWeWorkSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/HowWeWorkSection.astro", void 0);

const $$ReviewSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Wat klanten over mij zeggen";
  const reviews = [
    {
      name: "Lisa Jansen",
      functionTitle: "Marketingmanageer",
      review: [
        "Remco heeft voor ons een prachtige, op maat gemaakte website ontwikkeld. Niet alleen ziet de site er professioneel uit, maar hij levert ook meer leads dan ooit tevoren. Alles werd afgestemd op onze wensen en strategie.",
        "Remco heeft voor ons een prachtige, op maat gemaakte website ontwikkeld. Niet alleen ziet de site er professioneel uit, maar hij levert ook meer leads dan ooit tevoren. Alles werd afgestemd op onze wensen en strategie.",
        "Remco heeft voor ons een prachtige, op maat gemaakte website ontwikkeld. Niet alleen ziet de site er professioneel uit, maar hij levert ook meer leads dan ooit tevoren. Alles werd afgestemd op onze wensen en strategie."
      ],
      quote: "Meer leads \xE9n een professionele uitstraling \u2013 echt topwerk!",
      avatarUrl: "/",
      rating: 5
    },
    {
      name: "Mark de Vries",
      functionTitle: "Eigenaar, IT Solutions",
      review: [
        "Onze nieuwe website sluit perfect aan bij onze bedrijfsdoelen. De snelheid, het design en de functionaliteit zijn indrukwekkend. Ook na oplevering staat Remco altijd klaar voor ondersteuning.",
        "Onze nieuwe website sluit perfect aan bij onze bedrijfsdoelen. De snelheid, het design en de functionaliteit zijn indrukwekkend. Ook na oplevering staat Remco altijd klaar voor ondersteuning."
      ],
      quote: "Een website die precies doet wat wij nodig hebben.",
      avatarUrl: "/",
      rating: 4.7
    },
    {
      name: "Sophie van Dijk",
      functionTitle: "HR-consultant",
      review: [
        "Het resultaat overtrof onze verwachtingen. De website is niet alleen gebruiksvriendelijk, maar straalt ook perfect onze waarden uit. Het proces was transparant en prettig."
      ],
      quote: "Een website die onze waarden perfect weerspiegelt!",
      avatarUrl: "/",
      rating: 4.8
    },
    {
      name: "Tom Bakker",
      functionTitle: "Operationeel manager",
      review: [
        "We zochten een maatwerkoplossing, en dat is precies wat we hebben gekregen. De website heeft onze bedrijfsprocessen vereenvoudigd en zorgt voor betere interactie met klanten.",
        "De website heeft onze bedrijfsprocessen vereenvoudigd en zorgt voor betere interactie met klanten."
      ],
      quote: "Onze bedrijfsprocessen zijn merkbaar verbeterd dankzij de website.",
      avatarUrl: "/",
      rating: 5
    },
    {
      name: "Emma Verhoeven",
      functionTitle: "Productmanager",
      review: [
        "Dankzij jullie expertise hebben we nu een moderne, converterende website die onze doelgroep direct aanspreekt. Het resultaat is verbluffend en volledig afgestemd op onze behoeften."
      ],
      quote: "Een moderne website die echt converteert \u2013 meer kunnen we niet wensen!",
      avatarUrl: "/",
      rating: 5
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="fb-col-wrapper" data-astro-cid-m44frqtz> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionTitle": title, "data-astro-cid-m44frqtz": true })} <div class="reviews-wrapper masonry-layout" data-astro-cid-m44frqtz> ${reviews.map((review, i) => {
    return renderTemplate`<div class="masonry-item" data-astro-cid-m44frqtz> ${renderComponent($$result, "Card", $$Card, { "cardStyle": "review", "data-astro-cid-m44frqtz": true }, { "default": ($$result2) => renderTemplate` <div class="top-section" data-astro-cid-m44frqtz> ${renderComponent($$result2, "Image", $$Image, { "alt": `Profiel foto van ${review.name}`, "class": "avatar", "src": review.avatarUrl, "height": 250, "width": 250, "data-astro-cid-m44frqtz": true })} <span data-astro-cid-m44frqtz>"${review.quote}"</span> </div> <div data-astro-cid-m44frqtz> <h3 data-astro-cid-m44frqtz>${review.name}</h3> <span data-astro-cid-m44frqtz>${review.functionTitle}</span> ${review.review.map((paragraph) => {
      return renderTemplate`<p data-astro-cid-m44frqtz>${paragraph}</p>`;
    })} </div> ` })} </div>`;
  })} </div> </section> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/ReviewSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageContent = {
    metaTitle: "",
    metaDescription: "",
    heroTitle: "Winstgevende websites voor ondernemers met ambitie",
    heroSubtitle: "Je bent klaar voor de volgende stap: van ambitie naar groei. Je wilt een website die doet wat \u2018ie moet doen: leads genereren en je bedrijf laten groeien. Geen onnodige toeters en bellen, alleen resultaten. Zo simpel is het.",
    introSection: {
      title: "Digitale groei zonder gedoe",
      paragraph: "Je weet dat er meer in zit. Meer leads, meer omzet, meer vrijheid. Maar je website? Die werkt niet zo hard als jij. Tijd om daar korte metten mee te maken. Ik ontwerp websites voor ondernemers met ambitie. Geen standaard templates of loze beloftes, maar websites met een duidelijk doel: online groei. Het resultaat: een website die werkt, zonder dat jij er omkijken naar hebt.",
      imageUrl: "/images/about-image.png",
      altText: ""
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Westend Digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> <h1>${pageContent.heroTitle}</h1> <span>${pageContent.heroSubtitle}</span> ${renderComponent($$result3, "Button", $$Button, { "buttonStyle": "btn-secondary " }, { "default": ($$result4) => renderTemplate`Laten we kennismaken` })} </div> ` })} <main> ${renderComponent($$result2, "IntroSection", $$IntroSection, { "title": pageContent.introSection.title, "paragraph": pageContent.introSection.paragraph, "imageUrl": pageContent.introSection.imageUrl, "altText": pageContent.introSection.altText })} ${renderComponent($$result2, "UspSection", $$UspSection, {})} ${renderComponent($$result2, "HowWeWorkSection", $$HowWeWorkSection, {})} ${renderComponent($$result2, "ReviewSection", $$ReviewSection, {})} ${renderComponent($$result2, "FaqSection", $$FaqSection, {})} ${renderComponent($$result2, "CtaSection", $$CtaSection, {})} ${renderComponent($$result2, "FooterSection", $$FooterSection, {})} </main> ` })}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/index.astro", void 0);

const $$file = "/home/remco/code/remcoj89/openprojects/westend-digital/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
