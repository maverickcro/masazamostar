import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Masaža Mostar by Lorenco - Medicinska, Sportska i Opuštajuća Masaža
        </title>
        <meta
          name="description"
          content="Premium Usluge Masaže - Mostar - Za Muškarce i Žene - Uskoro s Vama"
        />
        <meta
          property="og:title"
          content="Masaža Mostar by Lorenco - Medicinska, Sportska i Opuštajuća Masaža"
        />
        <meta
          property="og:description"
          content="Premium Usluge Masaže - Mostar - Za Muškarce i Žene - Uskoro s Vama"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
