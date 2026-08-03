import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite-react-ssg' // module augmentation for ssgOptions

function keepOnlyCriticalPreloads(html: string) {
  return html.replace(/<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="(?:font|image)")[^>]*>/g, (tag) => {
    // The responsive <picture> and fetchPriority="high" select the correct
    // hero candidate. Generic SSG image preloads lack media/srcset and would
    // download every desktop and mobile fallback.
    if (tag.includes('as="image"')) return ''

    // Preload the two faces visible in the hero; other Latin weights retain
    // font-display: swap and are fetched only when the page actually uses them.
    return /inter-latin-(?:400|800)-normal/.test(tag) ? tag : ''
  })
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
