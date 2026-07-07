import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite-react-ssg' // module augmentation for ssgOptions

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // /pricing -> /pricing/index.html — required for GitHub Pages & static hosts
    dirStyle: 'nested',
    script: 'defer',
  },
})
