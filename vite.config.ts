import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite-react-ssg' // module augmentation for ssgOptions

function keepOnlyCriticalPreloads(html: string) {
  // react-helmet places route metadata before the template's charset during
  // SSG. Move charset back to the first head position so it stays within the
  // first 1024 bytes, as required by browsers and Lighthouse.
  let optimized = html
    .replace(/<meta\s+charset="[^"]+"\s*\/?>/i, '')
    .replace('<head>', '<head><meta charset="UTF-8">')

  optimized = optimized.replace(/<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="(?:font|image)")[^>]*>/g, (tag) => {
    if (tag.includes('as="image"')) return ''

    // Only the production hero faces block the first view. Inter remains
    // available for the opt-in comparison harness but is not a production
    // preload, and unused weights stay demand-loaded through font-display.
    return /(?:tenor-sans|manrope)-latin-400-normal/.test(tag) ? tag : ''
  })

  // Static content is already visible before hydration. Let the hero and its
  // two text faces win the initial network race on constrained connections.
  optimized = optimized.replace(
    /<script\b(?=[^>]*\btype="module")(?=[^>]*\bsrc="[^"]+")(?![^>]*\bfetchpriority=)[^>]*>/g,
    (tag) => tag.replace('<script', '<script fetchpriority="low"'),
  )

  // The SSG already places the hero <img> in the initial response. Mirror its
  // built URL into a preload. If a mobile <source> is present, give each asset
  // a mutually exclusive media query so a phone never downloads the desktop
  // fallback before the browser reaches the <picture> element.
  const criticalImageMatch = optimized.match(/<img\b(?=[^>]*\bfetchpriority="high")[^>]*\bsrc="([^"]+)"[^>]*>/)
  const criticalImage = criticalImageMatch?.[1]
  if (criticalImage && criticalImageMatch?.index !== undefined) {
    const pictureStart = optimized.lastIndexOf('<picture', criticalImageMatch.index)
    const pictureEnd = optimized.indexOf('</picture>', criticalImageMatch.index)
    const pictureHtml = pictureStart >= 0 && pictureEnd >= 0
      ? optimized.slice(pictureStart, pictureEnd)
      : ''
    const mobileSource = pictureHtml.match(
      /<source\b(?=[^>]*\bmedia="\(max-width: 700px\)")(?=[^>]*\bsrcset="([^"]+)")[^>]*>/i,
    )?.[1]
    const imagePreloads = mobileSource
      ? `<link rel="preload" as="image" href="${mobileSource}" media="(max-width: 700px)" fetchpriority="high">\n` +
        `<link rel="preload" as="image" href="${criticalImage}" media="(min-width: 701px)" fetchpriority="high">`
      : `<link rel="preload" as="image" href="${criticalImage}" fetchpriority="high">`

    optimized = optimized.replace(
      '</head>',
      `${imagePreloads}\n</head>`,
    )
  }

  // Helm publishes a deliberate contact address. Prevent Cloudflare Email
  // Address Obfuscation from rewriting those links and injecting its decoder
  // into every statically rendered page.
  optimized = optimized
    .replace('<body>', '<body><!--email_off-->')
    .replace('</body>', '<!--/email_off--></body>')

  return optimized
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // /pricing -> /pricing/index.html — required for GitHub Pages & static hosts
    dirStyle: 'nested',
    script: 'defer',
    beastiesOptions: {
      // Inline above-the-fold rules and load the remaining stylesheet without
      // keeping the entire site-wide design system on the render path.
      preload: 'media',
      preloadFonts: false,
    },
    onPageRendered: (_route, html) => keepOnlyCriticalPreloads(html),
  },
})
