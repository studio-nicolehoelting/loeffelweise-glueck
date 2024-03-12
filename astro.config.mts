import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import AstroPwa from "@vite-pwa/astro";
import pwaOptions from "./pwaSetup.ts";
import db from "@astrojs/db";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://astro.build/config
export default defineConfig({
  site: "https://loeffelweise-glueck.de",
  trailingSlash: "always",
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/styles/variables.module.scss";`
        }
      }
    }
  },
  integrations: [react(), sitemap({
    lastmod: new Date()
  }), robotsTxt(), AstroPwa(pwaOptions), db()]
});