import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import { useStore } from "../store/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}
