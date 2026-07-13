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
    
    urls.push(`${SITE_URL}${route ? '/' + route : ''}`);
  }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated successfully at ${path.join(DIST_DIR, 'sitemap.xml')}`);
