// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // config enviroment
  runtimeConfig: {
    wpsecret: process.env.WP_SECRET,
    public: {
      wpurlapi: process.env.WP_URL_API
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
