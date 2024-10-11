import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Delimiter",
      fileName: "delimiter",
    },
  },
  resolve: { alias: { src: resolve("src/") } },
  plugins: [dts(), cssInjectedByJsPlugin()],
});
