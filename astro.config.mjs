import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

import { defineConfig } from 'astro/config'


// https://astro.build/config
export default defineConfig({
  site: 'https://emmetbroaders.github.io',
  base: 'emmetbroaders.github.io',
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://broaders.io/sitemap-index.xml",
        "https://broaders.io/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
