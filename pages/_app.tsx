import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Masaža Mostar by Lorenco - Klasična, Sportska i Opuštajuća Masaža
        </title>
        <meta
          name="description"
          content="Fizioterapeut Lorenco Perić - Stručne usluge za opuštanje, terapiju i rehabilitaciju - Za Muškarce i Žene - +387 63 117 536 - Relax - Pristupačna Cijena"
        />
        <meta
          property="og:title"
          content="Masaža Mostar by Lorenco - Klasična, Sportska i Opuštajuća Masaža"
        />
        <meta
          property="og:description"
          content="Fizioterapeut Lorenco Perić - Stručne usluge za opuštanje, terapiju i rehabilitaciju - Za Muškarce i Žene - +387 63 117 536 - Relax - Pristupačna Cijena"
        />
        <meta property="og:image" content="/slika1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.masaza-mostar.com" />
        <meta property="og:site_name" content="Masaža Mostar by Lorenco" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Masaža Mostar by Lorenco - Klasična, Sportska i Opuštajuća Masaža"
        />
        <meta
          name="twitter:description"
          content="Fizioterapeut Lorenco Perić - Stručne usluge za opuštanje, terapiju i rehabilitaciju - Za Muškarce i Žene - +387 63 117 536 - Relax - Pristupačna Cijena"
        />
        <meta name="twitter:image" content="/slika1.jpg" />
        <meta property="og:locale" content="hr_HR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
