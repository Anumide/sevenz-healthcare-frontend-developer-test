import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
    httpEndpoint: "https://testdrive.kompletecare.com/graphql",
    browserHttpEndpoint: "https://testdrive.kompletecare.com/graphql",
    defaultOptions: {
    },
    tokenName: "token",
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: 'cookie',
    websocketsOnly: false,
    inMemoryCacheOptions: {
        addTypename: false,
    },
});