import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { RoutesPath } from "../Routes";

import { GlobalStyles } from "../themes";
import { client } from "../gql/apolloConfig";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <RoutesPath />
        <GlobalStyles />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
