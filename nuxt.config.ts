import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  rootDir: "./src",

  devtools: { enabled: true },

  modules: ["@pinia/nuxt"],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  imports: {
    dirs: ["api"],
  },

  css: ["normalize.css/normalize.css", "/assets/css/global.css"],

  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-preset-env": {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
          "custom-media-queries": true,
        },
      },
      cssnano: {
        preset: ["default", { calc: false }],
      },
    },
  },

  runtimeConfig: {
    baseUrl: process.env.NUXT_BASE_URL,

    public: {},
  },
});
