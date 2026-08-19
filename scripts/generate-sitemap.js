import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const SITE_URL = process.env.VITE_SITE_URL || 'https://helmsecured.com';

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

const urls = [];

function getPriority(route) {
  if (route === '') return '1.0';
  if (route === 'free-scan' || route === 'pricing') return '0.9';
  if (['helm-mail', 'helm-aware', 'helm-ready', 'manufacturing', 'professional-services', 'law-firms', 'accounting-firms', 'medical-practices', 'contractors'].includes(route)) return '0.8';
  if (route === 'resources') return '0.7';
  if (route.startsWith('resources/')) return '0.6';
  if (['about', 'faq', 'contact'].includes(route)) return '0.5';
  return '0.5';
}

walkDir(DIST_DIR, (filePath) => {
  if (filePath.endsWith('.html')) {
    let relativePath = path.relative(DIST_DIR, filePath);
    relativePath = relativePath.replace(/\\/g, '/');

    // Convert e.g., 'pricing/index.html' to 'pricing'
    // Convert 'index.html' to ''
    let route = relativePath.replace(/(^|\/)index\.html$/, '');
    if (route.endsWith('/')) {
        route = route.slice(0, -1);
    }

    if (relativePath === '404.html') return;

    // Only publish lastmod when the page carries a real editorial date. A
    // deploy date is not evidence that the page content changed.
    let lastmod;
    if (route.startsWith('resources/')) {
      const html = fs.readFileSync(filePath, 'utf8');
      const modified = html.match(/"dateModified":"(\d{4}-\d{2}-\d{2})"/);
      const published = html.match(/"datePublished":"(\d{4}-\d{2}-\d{2})"/);
      lastmod = modified?.[1] ?? published?.[1];
    }

    // vite-react-ssg emits nested directory pages and GitHub Pages serves
    // those pages at trailing-slash URLs. Submit only the final URLs.
    const url = `${SITE_URL}${route === '' ? '/' : '/' + route + '/'}`;
    urls.push({ url, route, lastmod });
  }
});

urls.sort((a, b) => parseFloat(getPriority(b.route)) - parseFloat(getPriority(a.route)));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({url, route, lastmod}) => `  <url>\n    <loc>${url}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n    <priority>${getPriority(route)}</priority>\n  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated successfully at ${path.join(DIST_DIR, 'sitemap.xml')}`);
