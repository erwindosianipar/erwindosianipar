export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: '@erwindosianipar' },
      { name: 'google-site-verification', content: '9kBK_rp1o3t8RZDZMmRUv5nvPrWLIhYc_KehM1nzCg8' },
      { name: 'robots', content: 'index, follow' },
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://pro.fontawesome.com' },
      { rel: 'dns-prefetch', href: 'https://erwindosianipar.github.io' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.2/css/all.css' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/sass/main.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Environtment Variables
  env: {
    FULL_NAME: 'Erwindo Sianipar',
    USER_NAME: '@erwindosianipar',
    AVATAR_URL: 'https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg',
    BASE_URL: 'https://erwindosianipar.me'
  }
}
