export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'localhost:3000'
  },

  axios: {
    baseUrl: process.env.VUE_APP_API_URL,
    headers: {
      post: {
        'Content-Type': 'application/json'
      }
    }
  },

  vuetify: {
    customVariables: ['~/assets/scss/_variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#000000',
          secondary: '#FFFFFF'
        },
        dark: {
          primary: '#FFFFFF',
          secondary: '#000000'
        }
      }
    }
  },

  router: {
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
