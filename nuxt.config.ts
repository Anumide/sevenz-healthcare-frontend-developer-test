// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css', '/src/assets/css/main.css'],
  alias: {
		'@': './src'
	},
  components: [
		'@/components',
	],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    auth_token: process.env.API_TOKEN
  },
  plugins: [
  './src/plugins/apollo.ts'
],
  apollo: {
    autoImports: true,
    // authType: 'Bearer',
    // authHeader: 'Authorization',
    // tokenStorage: 'cookie',
    // proxyCookies: true,
    clients: {
      default: "./src/graphql/default-config.ts"
      // default: {
      //   tokenName: 'token',
      //   httpEndpoint: process.env.API_URL as string
      // }
    },
  },
})
