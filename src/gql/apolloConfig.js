import { ApolloClient, InMemoryCache } from "@apollo/client";

import { HTTP_API_URL } from "../environment";

export const client = new ApolloClient({
  uri: HTTP_API_URL,
  cache: new InMemoryCache(),
});
