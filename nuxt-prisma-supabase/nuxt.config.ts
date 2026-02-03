export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '/backend/**': { ssr: false }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false,
    cookieOptions: {
      secure: false,
    }
  },

  runtimeConfig: {
    githubToken: '123456',
    githubUsername: 'no_name',
    githubRepo: 'no_repo'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
