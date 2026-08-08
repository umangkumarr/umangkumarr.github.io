import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { url } from "./src/lib/url";

// https://astro.build/config
// Fully static output — every page sets `prerender = true`, so the site
// deploys to any static host (GitHub Pages via .github/workflows/deploy.yml).
export default defineConfig({
  output: "static",

  site: url,

  vite: {
    plugins: [tailwindcss()],
  },
});
