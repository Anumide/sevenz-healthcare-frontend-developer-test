import {provideApolloClient} from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
   provideApolloClient(useApollo().clients!.default)
    const { auth_token } = useRuntimeConfig();
    nuxtApp.hook("apollo:auth", ({ client, token }) => {
      // `client` can be used to differentiate logic on a per-client basis.
        console.log(client)
      // apply apollo client token
      token.value = `Bearer 5454|xEdZLrIYBL0eCDPrHONdI7LcLuxf9eBHwwU5q7wq`;
      console.log(token.value)
    });
  });