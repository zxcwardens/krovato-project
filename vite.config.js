import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  define: {
    global: {},
  },
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html"),
    },
    outDir: "../dist",
  },
  plugins: [
    injectHTML({
      injectData: {
        title: 'Krovato', 
      },
      indexFileName: './src/index.html'
    }), 
    FullReload(["./src/**.html"])
  ],
});
    