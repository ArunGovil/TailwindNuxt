import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcomeHead: " Welcome to Nuxt Tailwind",
          about: "About",
          intro: "Start building for free, then add a site plan to go live. Account plans unlock additional features.",
        },
        es: {
          welcomeHead: "Bienvenidos a Nuxt Tailwind",
          about: "Acerca de",
          intro:
            "Comience a crear de forma gratuita, luego agregue un plan de sitio para que se active. Los planes de cuenta desbloquean funciones adicionales.",
        },
      },
    },
  },
});
