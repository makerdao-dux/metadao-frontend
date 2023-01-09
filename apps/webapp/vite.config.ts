import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // TODO: would like to change this back to 5173 but first need to change cypress default baseUrl
    port: 3000
  },
  root: 'src',
  build: {
    outDir: '../dist'
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      }
    })
  ]
});
