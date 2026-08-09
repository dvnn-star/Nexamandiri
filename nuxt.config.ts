// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/webp', href: '/Logo.webp' }
      ]
    }
  },
  modules: [
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'id', language: 'id-ID' },
      { code: 'en', language: 'en-US' }
    ],
    defaultLocale: 'id',
    strategy: 'prefix_except_default'
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.NUXT_SITE_URL || 'http://localhost:3000',
    name: 'Nexa Mandiri Group',
    description: 'Nexa Mandiri Group',
    defaultLocale: 'id',
  },
  image: {
    format: ['webp'],
  }
})