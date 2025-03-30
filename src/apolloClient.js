// eslint-disable-next-line no-unused-vars
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000", // Update with your backend GraphQL URL
  cache: new InMemoryCache(),
});

export default client;
