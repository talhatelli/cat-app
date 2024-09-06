// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  serverMiddleware: [{ path: "/api", handler: "~/server/middleware/proxy.js" }],
});