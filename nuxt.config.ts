// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },


  nitro: {
    experimental: {
      openAPI: true
    },
    openAPI: {
      'meta': {
        'title': 'Дока для сайта бронирования туров',
        "description": "да да, это дока"
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  experimental: {

    typedPages: true,
    componentIslands: true
  },

  modules: ['@nuxt/fonts'],


})