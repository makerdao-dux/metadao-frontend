import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-electron-plugin';
import { customStart, loadViteEnv } from 'vite-electron-plugin/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'PUBLIC_',
  envDir: __dirname,
  plugins: [
    react(),
    electron({
      include: ['electron-app'],
      transformOptions: {
        sourcemap: !!process.env.VSCODE_DEBUG
      },
      plugins: [
        ...(process.env.VSCODE_DEBUG
          ? [
              // Will start Electron via VSCode Debug
              customStart(
                debounce(() => console.log(/* For `.vscode/.debug.script.mjs` */ '[startup] Electron App'))
              )
            ]
          : []),
        // Allow use `import.meta.env.VITE_SOME_KEY` in Electron-Main
        loadViteEnv()
      ]
    })]
 
});

function debounce<Fn extends (...args: any[]) => void>(fn: Fn, delay = 299) {
  let t: NodeJS.Timeout;
  return ((...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  }) as Fn;
}
