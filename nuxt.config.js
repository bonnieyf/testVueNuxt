
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/sass/web.sass',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'zh-hant',
          code: 'zh-hant',
          iso: 'zh-hant',
          file: 'zh-hant.js'
        },
        {
          name: 'en-us',
          code: 'en-us',
          iso: 'en-us',
          file: 'en-us.js'
        },
    ],
    baseUrl: 'https://www.moshi.com/',
    seo: true,
    langDir: 'locales/',
    defaultLocale: 'zh-hant',
    vueI18nLoader: true,
    lazy: true,
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  router: {
    middleware: ['locale-redirect'],
    linkExactActiveClass: 'active-link',
  }
}