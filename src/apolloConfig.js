import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: ""
});

export default apolloClient;