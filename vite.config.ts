import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite-react-ssg' // module augmentation for ssgOptions

function keepOnlyCriticalPreloads(html: string) {
  let optimized = html.replace(/<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="(?:font|image)")[^>]*>/g, (tag) => {
    if (tag.includes('as="image"')) return ''

    // Only the production hero faces block the first view. Inter remains
    // available for the opt-in comparison harness but is not a production
    // preload, and unused weights stay demand-loaded through font-display.
    return /(?:tenor-sans|manrope)-latin-400-normal/.test(tag) ? tag : ''
  })

  // The SSG already places the hero <img> in the initial response. Mirror its
  // exact built URL into a preload so Lighthouse and the browser can discover
  // the LCP request while parsing <head>, before styles or hydration begin.
  const criticalImage = optimized.match(/<img\b(?=[^>]*\bfetchpriority="high")[^>]*\bsrc="([^"]+)"[^>]*>/)?.[1]
  if (criticalImage) {
    optimized = optimized.replace(
      '</head>',
      `<link rel="preload" as="image" href="${criticalImage}" fetchpriority="high">\n</head>`,
    )
  }

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
      preload: 'swap',
      preloadFonts: false,
    },
    onPageRendered: (_route, html) => keepOnlyCriticalPreloads(html),
  },
})
