// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },
  experimental: {
    typedPages: true,
    componentIslands: true
  },

  modules: ['@nuxt/fonts'],
})