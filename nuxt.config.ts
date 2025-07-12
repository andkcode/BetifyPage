// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/kinde',
    '@nuxt/image',
    '@nuxtjs/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-security',
    'nuxt-swiper',
    '@nuxtjs/seo',
    '@nuxt/test-utils/module'
  ],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' }
    ],
    defaultLocale: 'en',
  },
  security: {
  },
})