// Runs after `react-scripts build`: turns build/index.html into one page per language (index.html for
// French, en.html and ar.html served as /en and /ar) with its own head, then writes the sitemap.
// Crawlers that skip JavaScript still get the right title, description and language alternates.
const fs = require('fs');
const path = require('path');
const seo = require('../src/seo.json');

const BUILD = path.join(__dirname, '..', 'build');
const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');
const codes = Object.keys(seo.langs);
const url = (code) => seo.site + seo.langs[code].path;
const image = seo.site + seo.image;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const meta = (attr, key, content) => `<meta ${attr}="${key}" content="${esc(content)}">`;

const jsonLd = (code) => {
  const l = seo.langs[code];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${seo.site}/#website`,
        url: `${seo.site}/`,
        name: seo.name,
        alternateName: ['Abdenour Garti', 'Garti Abdenour'],
        inLanguage: codes,
        publisher: { '@id': `${seo.site}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${seo.site}/#person`,
        name: seo.name,
        givenName: 'Abdenour',
        familyName: 'Garti',
        url: `${seo.site}/`,
        image,
        jobTitle: l.jobTitle,
        worksFor: { '@type': 'Organization', name: 'M2I Services' },
        address: { '@type': 'PostalAddress', addressLocality: 'Algiers', addressCountry: 'DZ' },
        knowsAbout: ['Laravel', 'Vue.js', 'React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Full Stack Web Development'],
        sameAs: seo.sameAs,
      },
      {
        '@type': 'ProfilePage',
        url: url(code),
        name: l.title,
        description: l.description,
        inLanguage: code,
        isPartOf: { '@id': `${seo.site}/#website` },
        mainEntity: { '@id': `${seo.site}/#person` },
      },
    ],
  };
};

const head = (code) => {
  const l = seo.langs[code];
  return [
    `<title>${esc(l.title)}</title>`,
    meta('name', 'description', l.description),
    meta('name', 'author', seo.name),
    meta('name', 'application-name', seo.name),
    meta('name', 'apple-mobile-web-app-title', seo.name),
    `<link rel="canonical" href="${url(code)}">`,
    ...codes.map((c) => `<link rel="alternate" hreflang="${c}" href="${url(c)}">`),
    `<link rel="alternate" hreflang="x-default" href="${url('fr')}">`,
    meta('property', 'og:type', 'profile'),
    meta('property', 'og:site_name', seo.name),
    meta('property', 'og:url', url(code)),
    meta('property', 'og:title', l.title),
    meta('property', 'og:description', l.description),
    meta('property', 'og:image', image),
    meta('property', 'og:locale', l.locale),
    ...codes.filter((c) => c !== code).map((c) => meta('property', 'og:locale:alternate', seo.langs[c].locale)),
    meta('property', 'profile:first_name', 'Abdenour'),
    meta('property', 'profile:last_name', 'Garti'),
    meta('name', 'twitter:card', 'summary'),
    meta('name', 'twitter:creator', seo.twitter),
    meta('name', 'twitter:title', l.title),
    meta('name', 'twitter:description', l.description),
    meta('name', 'twitter:image', image),
    `<script type="application/ld+json">${JSON.stringify(jsonLd(code)).replace(/</g, '\\u003c')}</script>`,
  ].join('');
};

for (const code of codes) {
  const l = seo.langs[code];
  const html = template
    .replace(/<html[^>]*>/, `<html lang="${code}" dir="${l.dir}">`)
    .replace('</head>', `${head(code)}</head>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript><h1>${esc(l.title)}</h1><p>${esc(l.description)}</p></noscript>`);
  fs.writeFileSync(path.join(BUILD, code === 'fr' ? 'index.html' : `${code}.html`), html);
}

const today = new Date().toISOString().slice(0, 10);
const alternates = [
  ...codes.map((c) => `    <xhtml:link rel="alternate" hreflang="${c}" href="${url(c)}"/>`),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('fr')}"/>`,
].join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${codes.map((c) => `  <url>\n    <loc>${url(c)}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemap);

console.log(`SEO pages written for ${codes.join(', ')} + sitemap.xml`);
