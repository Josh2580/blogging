import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cssFileName = "index.min.css";

// https://vitejs.dev/config/
export default defineConfig({
  // build: { manifest: true },
  // base: process.env === "production" ? "/static/" : "/",
  // root: "/",
  plugins: [react()],
  publicDir: "./public",
  build: {
    rollupOptions: {
      // input: {
      //   main: (__dirname, "index.html"),
      // },
      assetFileNames: (file) => {
        return `assets/css/${cssFileName}`;
      },
      entryFileNames: (file) => {
        return `assets/js/[name].min.js`;
      },
    },
  },
  base: "/",
});
