export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    // Get i18n header option from nuxt i18n
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true }) || {htmlAttrs:{},meta:{}}
    return {
      title: 'wcl-demo',
      htmlAttrs: {
        style: '--base-font-size:16px;',
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta,
      ],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',  // recommended
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/default.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // for better use of typescript do not use nuxt c
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-helmet', '@nuxtjs/i18n', '@nuxt/http'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    langDir: '~/locales/',
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
