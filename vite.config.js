import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ontop-band-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
}) 