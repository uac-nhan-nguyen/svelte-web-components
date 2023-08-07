import {defineConfig} from "vite";
import * as glob from 'glob';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';


import {svelte} from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({}),
      exclude: /\.wc\.svelte$/,
      emitCss: false,
    }),
    svelte({
      preprocess: sveltePreprocess(),
      include: /\.wc\.svelte$/,
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
    }),
  ],
  build: {
    sourcemap: true,
    target: "modules",
    // lib: {
    //   entry: ["src/main.ts"],
    //   name: "<<name>>",
    //   fileName: "components",
    // },
    rollupOptions: {
      input: {
        "index.html": "index.html",
        ...Object.fromEntries(
          glob.sync('src/wc/**/*.wc.svelte').map(file => {
            const name = file.replace('src/', '').replace('.wc.svelte', '')
            return [
              name,
              fileURLToPath(new URL(file, import.meta.url))
            ];
          }),
        ),
      },
      output: {
        entryFileNames: '[name].js'
      }
    }

  },
});