// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      database: process.env.DATABASE_URL
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
