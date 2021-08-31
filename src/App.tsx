import React from "react";
import { ThemeProvider } from "styled-components";

import "antd/dist/antd.css";
import GlobalStyles from "styles/GlobalStyles";
import { theme } from "styles/theme";

import Home from "Pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
