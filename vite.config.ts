import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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

// Previous config
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   envPrefix: 'PUBLIC_',
//   envDir: __dirname
// })
