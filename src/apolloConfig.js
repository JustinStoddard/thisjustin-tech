import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: 'http://localhost:4000/'})
});

export default apolloClient;