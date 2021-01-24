import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Provider, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import store from "./store/store";
import Router from "./router/router";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
    <ToastContainer autoClose={3000} />
  </Provider>
);

export default App;
