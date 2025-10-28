import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  define: {
    DEV: JSON.stringify(false),
    PROD: JSON.stringify(false),
    TEST: JSON.stringify(false),
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "xier-element": path.resolve(__dirname, "../core/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
