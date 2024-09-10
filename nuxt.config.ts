// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/color-mode'],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    secretKey: process.env.SECRET_KEY,
  },
  colorMode: {
    preference: 'light', 
    fallback: 'light',   
    classSuffix: '',
  },
});
