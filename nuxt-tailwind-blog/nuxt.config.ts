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

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Nuxt Tailwind Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
