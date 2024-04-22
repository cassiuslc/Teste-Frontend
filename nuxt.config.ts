// https://nuxt.com/docs/api/configuration/nuxt-config
const title = "APP Cassius";
const shortTitle = "Teste de Front-end";
const description = "Apenas um teste de painel front-end";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "@/assets/main.scss",
    "vuetify/lib/styles/main.sass"
  ],
  build: {
      transpile: ['vuetify'],
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],

  app: {
    head: {
      title: title,
    }
  },
})
