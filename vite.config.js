import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wallet-api/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // map '@' to './src'
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/_variables.scss";',
      },
    },
  },
});
