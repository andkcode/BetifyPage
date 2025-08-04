// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  runtimeConfig: {
    openaiApiKey: 'sk-mnopqrstijkl5678mnopqrstijkl5678mnopqrst', 
    public: {}
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: [
    '@nuxtjs/kinde',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-security',
    'nuxt-swiper',
    '@nuxtjs/seo',
    '@nuxt/test-utils/module',
    'nuxt-cron',
  ],
  css: ['~/assets/css/main.css'],
  security: {
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'img-src': ["'self'", 'https:', 'https://posterjack.ca', 'https://picsum.photos', 'https://www.rapid7.com'],
      }
    }
  },
    image: {
    domains: ['www.rapid7.com']
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' }
    ],
    defaultLocale: 'en',
  },
  security: {
  },
  cron: {
    jobs: [
      {
        name: 'generate-questions-hourly',
        schedule: '0 * * * *', 
        command: async () => {
          await $fetch('server/api/cron/generate-questions', { method: 'POST' })
        }
      }
    ]
  }
})