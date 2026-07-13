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
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const urls = [];

function getPriority(route) {
  if (route === '') return '1.0';
  if (route === 'free-scan' || route === 'pricing') return '0.9';
  if (['helm-mail', 'helm-aware', 'helm-ready', 'manufacturing', 'professional-services', 'contractors'].includes(route)) return '0.8';
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
    
    const url = `${SITE_URL}${route === '' ? '/' : '/' + route}`;
    urls.push({ url, route });
  }
});

const currentDate = new Date().toISOString().split('T')[0];

urls.sort((a, b) => parseFloat(getPriority(b.route)) - parseFloat(getPriority(a.route)));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({url, route}) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <priority>${getPriority(route)}</priority>\n  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated successfully at ${path.join(DIST_DIR, 'sitemap.xml')}`);
