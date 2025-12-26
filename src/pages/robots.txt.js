const getRobotsTxt = (sitemapURL) => `
User-agent: *
Allow: /
Noindex: /bedankt-pagina
Noindex: /privarybeleid
Noindex: /algemene-voorwaarden

Sitemap: ${sitemapURL.href}
`;

export const GET = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
