// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
	target: 'static',
	head: {
		title: 'Traq',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		]
	},
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
    clients: {
      default: "./src/graphql/default-config.ts"
    },
  },
})
