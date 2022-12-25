import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shop</title>

        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The best online shop in the world" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
