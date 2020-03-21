export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || 'GroupUI Alternate',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    process.env.npm_package_description ||
                    'GroupUI Atomic Design Version'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#004666' },
    /*
     ** Global CSS
     */
    css: ['@/assets/css/main'],
    /*
     ** Overwrite PWA Manifest
     */
    manifest: {
        display: 'standalone',
        theme_color: '#002d42'
    },

    /*
     ** Router configuration
     */
    router: {
        linkActiveClass: 'link-active',
        linkExactActiveClass: 'link-active'
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/utils.js',
        { src: '@/plugins/axios', ssr: true },
        { src: '@/plugins/validate.js', ssr: false },
        { src: '@/plugins/localStorage.js', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://pwa.nuxtjs.org/setup.html
        '@nuxtjs/pwa',
        // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
        'cookie-universal-nuxt',
        // Doc: https://github.com/nuxt-community/device-module#readme
        '@nuxtjs/device'
    ],

    /*
     ** Tailwind CSS
     */

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        purgeCSSInDev: false
    },

    purgeCSS: {
        whitelist: [],
        whitelistPatterns: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^nuxt-link(|-exact)-active$/,
            /data-v-.*/,
            /(button|tag|info|i|left|right)-.*/
        ]
    },

    /*
     ** Server and Server Middleware
     */
    serverMiddleware: [
        // Will register redirect-ssl npm package
        'redirect-ssl'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
