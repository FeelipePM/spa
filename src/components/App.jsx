import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignInPage } from "./pages/SignInPage/index";
import { SignUpPage } from "./pages/SignUpPage/index";
import { GlobalStyles } from "../themes";
import { client } from "../gql/apolloConfig";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <GlobalStyles />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
