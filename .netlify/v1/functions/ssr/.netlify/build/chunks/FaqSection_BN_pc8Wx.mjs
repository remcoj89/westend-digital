import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, i as renderScript } from './astro/server_C7i7LfnI.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Bxm9vaWi.mjs';
/* empty css                                        */
import 'clsx';
import { b as AccordionIcon } from './Layout_RdFGYvJp.mjs';

const $$Astro$3 = createAstro("https://westend-digital.nl/");
const $$IntroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$IntroSection;
  const {
    title,
    paragraph,
    imageUrl,
    altText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="intro-section fb-col-wrapper" data-astro-cid-nlg3kqhj> <div class="copy-wrapper" data-astro-cid-nlg3kqhj> <h2 data-astro-cid-nlg3kqhj>${title}</h2> <p data-astro-cid-nlg3kqhj>${paragraph}</p> </div> <div class="img-wrapper" data-astro-cid-nlg3kqhj> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": altText, "width": 500, "height": 500, "data-astro-cid-nlg3kqhj": true })} </div> </section> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/IntroSection.astro", void 0);

const $$Astro$2 = createAstro("https://westend-digital.nl/");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 data-astro-cid-azbpcp4f>${sectionTitle}</h2> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/SectionTitle.astro", void 0);

const $$Astro$1 = createAstro("https://westend-digital.nl/");
const $$FaqAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FaqAccordion;
  const {
    question,
    answer,
    link
  } = Astro2.props;
  const color = "var(--clr-primary-300)";
  return renderTemplate`${maybeRenderHead()}<li class="accordion" data-astro-cid-mhigdioq> <div class="accordion-header" data-astro-cid-mhigdioq> <h3 data-astro-cid-mhigdioq>${question} ${renderComponent($$result, "AccordionIcon", AccordionIcon, { "iconFill": color, "data-astro-cid-mhigdioq": true })}</h3> </div> <div class="accordion-content" data-astro-cid-mhigdioq> <div data-astro-cid-mhigdioq> <p data-astro-cid-mhigdioq>${answer}</p> ${link && renderTemplate`<a${addAttribute(`/${link}`, "href")} target="_blank" data-astro-cid-mhigdioq>Of klik hier voor meer informatie</a>`} </div> </div> </li> `;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/components/FaqAccordion.astro", void 0);

const $$Astro = createAstro("https://westend-digital.nl/");
const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqSection;
  const title = "Heb je een vraag? check hieronder het antwoord";
  const faqs = [
    {
      question: "Hoeveel kost het om een website te maken?",
      answer: "Lorem ipsum dolor sit amet consectetur. Viverra pellentesque leo congue volutpat vitae lorem mus porta vitae. Leo ipsum quis feugiat eget vulputate cursus. Vestibulum facilisi condimentum ipsum justo ipsum. Dignissim nibh blandit tellus nunc quisque euismod. Vitae vitae convallis elementum cum pellentesque consequat. Sem massa donec mattis tincidunt consequat elementum facilisis viverra. Consequat sodales et vitae aliquet leo sit integer. Ridiculus cursus nunc adipiscing nunc sodales eget in nunc. Enim nullam vitae tortor nibh lorem integer. Eu sit eget libero velit. Fermentum arcu phasellus nisi nunc accumsan tellus fringilla. Consequat blandit amet sapien parturient.",
      internalLink: "/"
    },
    {
      question: "Kan ik mijn website door jou laten onderhouden?",
      answer: "Lorem ipsum dolor sit amet consectetur. Viverra pellentesque leo congue volutpat vitae lorem mus porta vitae. Leo ipsum quis feugiat eget vulputate cursus. Vestibulum facilisi condimentum ipsum justo ipsum. Dignissim nibh blandit tellus nunc quisque euismod. Vitae vitae convallis elementum cum pellentesque consequat. Sem massa donec mattis tincidunt consequat elementum facilisis viverra. Consequat sodales et vitae aliquet leo sit integer. Ridiculus cursus nunc adipiscing nunc sodales eget in nunc. Enim nullam vitae tortor nibh lorem integer. Eu sit eget libero velit. Fermentum arcu phasellus nisi nunc accumsan tellus fringilla. Consequat blandit amet sapien parturient.",
      internalLink: "/"
    },
    {
      question: "Kan ik mijn website ook bij jou hosten?",
      answer: "Lorem ipsum dolor sit amet consectetur. Viverra pellentesque leo congue volutpat vitae lorem mus porta vitae. Leo ipsum quis feugiat eget vulputate cursus. Vestibulum facilisi condimentum ipsum justo ipsum. Dignissim nibh blandit tellus nunc quisque euismod. Vitae vitae convallis elementum cum pellentesque consequat. Sem massa donec mattis tincidunt consequat elementum facilisis viverra. Consequat sodales et vitae aliquet leo sit integer. Ridiculus cursus nunc adipiscing nunc sodales eget in nunc. Enim nullam vitae tortor nibh lorem integer. Eu sit eget libero velit. Fermentum arcu phasellus nisi nunc accumsan tellus fringilla. Consequat blandit amet sapien parturient."
    },
    {
      question: "Hoe lang duurt het om een website te laten maken?",
      answer: "Lorem ipsum dolor sit amet consectetur. Viverra pellentesque leo congue volutpat vitae lorem mus porta vitae. Leo ipsum quis feugiat eget vulputate cursus. Vestibulum facilisi condimentum ipsum justo ipsum. Dignissim nibh blandit tellus nunc quisque euismod. Vitae vitae convallis elementum cum pellentesque consequat. Sem massa donec mattis tincidunt consequat elementum facilisis viverra. Consequat sodales et vitae aliquet leo sit integer. Ridiculus cursus nunc adipiscing nunc sodales eget in nunc. Enim nullam vitae tortor nibh lorem integer. Eu sit eget libero velit. Fermentum arcu phasellus nisi nunc accumsan tellus fringilla. Consequat blandit amet sapien parturient."
    }
  ];
  const {
    sectionId
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="fb-col-wrapper"${addAttribute(sectionId, "id")} data-astro-cid-6pjbijno> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionTitle": title, "data-astro-cid-6pjbijno": true })} <span class="section-subtitle" data-astro-cid-6pjbijno>Niet het antwoord dat je zoekt? Je kunt ook
<a href="mailto:info@westend-digital.nl" data-astro-cid-6pjbijno>mailen.</a> </span> <ul class="faq-wrapper" role="list" data-astro-cid-6pjbijno> ${faqs.map((faq, i) => {
    return renderTemplate`${renderComponent($$result, "FaqAccordion", $$FaqAccordion, { "question": faq.question, "answer": faq.answer, "link": faq.internalLink, "index": i, "data-astro-cid-6pjbijno": true })}`;
  })} </ul> ${renderComponent($$result, "Image", $$Image, { "alt": "", ",": true, "class": "faq-image", "src": "/images/about-image.png", "height": "500", "width": "500", "data-astro-cid-6pjbijno": true })} </section>  ${renderScript($$result, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/FaqSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/remco/code/remcoj89/openprojects/westend-digital/src/sections/FaqSection.astro", void 0);

export { $$SectionTitle as $, $$IntroSection as a, $$FaqSection as b };
