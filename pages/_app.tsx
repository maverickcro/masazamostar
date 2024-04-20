import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Masaža Mostar by Lorenzo - Relax i Sportska Masaža</title>
        <meta name="description" content="⚒️ WEB mjesto u izradi ⚒️" />
        <meta
          property="og:title"
          content="Masaža Mostar by Lorenzo - Relax i Sportska Masaža"
        />
        <meta property="og:description" content="⚒️ WEB mjesto u izradi ⚒️" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
