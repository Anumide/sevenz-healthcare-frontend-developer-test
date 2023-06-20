import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
    httpEndpoint: "https://testdrive.kompletecare.com/graphql",
    browserHttpEndpoint: "https://testdrive.kompletecare.com/graphql",
    // httpLinkOptions: {
    //     credentials: "same-origin",
    //     headers: {
    //         "x-auth-api": process.env.X_AUTH_API!,
    //     },
    // },
    defaultOptions: {
        // watchQuery: {
        //     fetchPolicy: "cache-and-network",
        // },
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