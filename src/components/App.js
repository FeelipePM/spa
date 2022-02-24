import React from "react";

import { GlobalStyles } from "../themes/GlobalStyle/index";
import { SignInPage } from "./pages/SignInPage/index";

const App = () => {
  return (
    <div>
      <SignInPage />
      <GlobalStyles />
    </div>
  );
};

export default App;
