import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
// Import css files
import { themeOptions } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    {/* <AuthContextProvider> */}
    <ThemeProvider theme={themeOptions}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    {/* </AuthContextProvider> */}
  </BrowserRouter>
);
