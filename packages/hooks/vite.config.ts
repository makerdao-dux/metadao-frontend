// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'makerdao-dux-hooks',
      fileName: 'makerdao-dux-hooks'
    }
  },
  test: {
    exclude: [...configDefaults.exclude],
    globals: true,
    environment: 'jsdom'
  },
  plugins: [dts()]
});
