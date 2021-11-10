const siteInfo = require('./content/setup/info.json');
const pkginfo = require('./package.json')
const webpack = require('webpack')
import serveStatic from 'serve-static'

module.exports = {
  target: 'static',
  components: true,
  mode: "universal",
  /*
  ** Headers of the page
  */
  transition: { mode: "in-out" },
  env: {
    API_URL: process.env.API_URL,
    BAEL_VERSION: pkginfo.version
  },
  head: {
    title: siteInfo.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteInfo.sitedescription }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;800&display=swap' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/fontawesome.css' }
     
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdn.omise.co/omise.js',
        type: 'text/javascript'
      }
    ]
  },
  //serverMiddleware: ['~/api/auth.js'],
  
  serverMiddleware: [
    { path: '/api', handler: '~/api/app.js' },
    { path: '/static2', handler: serveStatic(__dirname + '/static2') }
    
  ],
  //css: ["@/assets/grid.css", "@/assets/content.scss", "bf-solid/dist/solid.latest.css","@/assets/main.scss"],
  css: ["@/assets/grid.css", "@/assets/content.scss","@/assets/main.scss","@/assets/promp.scss","@/assets/register-company.scss"],
  
  // icon: {
  //   iconSrc: `${siteInfo.siteicon}`
  //  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  
  
  modules: 
  [
    '@nuxtjs/bootstrap-vue',
    '@nuxt/content', 
    '@nuxtjs/pwa', 
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
   
    
    ['@nuxtjs/bootstrap-vue', { css: false }],
    [
      'nuxt-element-ui',
      {
        components: ['Button', 'DatePicker'],
        locale: 'en',
      },
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAcuRid40eaVEx5TKKn5yibuDTFNDyQxAU",
        authDomain: "promp-d2fc3.firebaseapp.com",
        databaseURL: "https://promp-d2fc3.firebaseio.com",
        projectId: "promp-d2fc3",
        storageBucket: "promp-d2fc3.appspot.com",
        messagingSenderId: "660976897097",
        appId: "1:660976897097:web:3e99bf294512e6f1cd4398"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ],
    '@nuxtjs/fontawesome'
   

  ],
  router: {
    middleware: 'router-auth'
  },
  bootstrapVue: {
    // Add the desired icon components to the `components` array
    components: ['BIcon', 'BIconAlertFill', 'BIconCalendar', 'BIconGears','BForm']
  },
  firebase: {
   
    config: {
      foofoofoo: {
        apiKey: "AIzaSyAcuRid40eaVEx5TKKn5yibuDTFNDyQxAU",
        authDomain: "promp-d2fc3.firebaseapp.com",
        databaseURL: "https://promp-d2fc3.firebaseio.com",
        projectId: "promp-d2fc3",
        storageBucket: "promp-d2fc3.appspot.com",
        messagingSenderId: "660976897097",
        appId: "1:660976897097:web:3e99bf294512e6f1cd4398"
      },
      faafaafaa: {
        //
      }
    },
    env: {
      FIRE_ENV: process.env.FIRE_ENV
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true
      
    },
    
    /*database: {
      emulatorPort: 3000,
      emulatorHost: 'localhost',
    },*/
    storage: true
    
    
  },
  
  content: {
    fullTextSearchFields: ['title', 'description', 'category']
  },
  manifest: {
    name: siteInfo.sitename,
    short_name: siteInfo.sitename,
    description: siteInfo.sitedescription,
    lang: 'en'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: '/images/uploads/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'image-cache',
          cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 86400
          }
        }
      }
    ]
  },

  /*
  ** Route config for pre-rendering
  */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: ['title']
  },

  plugins: [
    
   // { src: "@/plugins/api.js" },
    {
      src: "~/plugins/browser",
      mode: 'client'
    }, {
      src: "~/plugins/moment",
      mode: 'client'
    }, {
      src: "~/plugins/lazyload",
      mode: 'client'
    },
    { 
      src: '~/plugins/vue-datepicker',
     
      mode: 'client' ,
      
    },
    "~/plugins/vee-validate.js",
    { src: '@/plugins/vue-html2pdf', mode: 'client' }
    
  ],
  axios: {
    baseURL: 'https://api-propmpt.netlify.app/.netlify/functions/server',
    //baseURL: 'http://localhost:3001/api',
   // credentials: false
  },
 /*  auth: {
   strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    },
    redirect: {
      login: '/login'
    }
  },*/
  /*
  ** Build configuration
  */

  build: {
    transpile: ["vee-validate/dist/rules"],
    extractCSS: false,
    html: {
      minify: {
       minifyCSS: false,
       minifyJS: false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        _get: 'lodash/get',
      })
    ],
    /** Uncomment this if you need to use the full Vue build */
    // extend(config) {
    //     config.resolve.alias['vue'] = 'vue/dist/vue.common'
    // }
  },
}


