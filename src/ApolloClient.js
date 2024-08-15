import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "http://localhost:4001/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient;