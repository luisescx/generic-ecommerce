import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Shop</title>

        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The best online shop in the world" />
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}
