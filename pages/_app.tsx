import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Masaža Lorenco - Klasična, Sportska i Opuštajuća Masaža - Mostar
        </title>
        <meta
          name="description"
          content="Briga za vlastito zdravlje nije luksuz. Nudim stručne usluge masaže za opuštanje, terapiju i sportaše -  Masaza za Muškarce i Žene u Mostaru - Fizioterapeut Lorenco Perić"
        />
        <meta
          property="og:title"
          content="Masaža Lorenco - Klasična, Sportska i Opuštajuća Masaža - Mostar"
        />
        <meta
          property="og:description"
          content="Briga za vlastito zdravlje nije luksuz. Nudim stručne usluge masaže za opuštanje, terapiju i sportaše -  Masaza za Muškarce i Žene u Mostaru - Fizioterapeut Lorenco Perić"
        />
        <meta property="og:image" content="/slika1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.masaza-mostar.com" />
        <meta property="og:site_name" content="Masaža Mostar by Lorenco" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Masaža Lorenco - Klasična, Sportska i Opuštajuća Masaža - Mostar"
        />
        <meta
          name="twitter:description"
          content="Briga za vlastito zdravlje nije luksuz. Nudim stručne usluge masaže za opuštanje, terapiju i sportaše -  Masaza za Muškarce i Žene u Mostaru - Fizioterapeut Lorenco Perić"
        />
        <meta name="twitter:image" content="/slika1.jpg" />
        <meta property="og:locale" content="hr_HR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content="Lorenco Perić" />
        <link rel="canonical" href="https://www.masaza-mostar.com" />
        <meta
          name="keywords"
          content="masaža, klasična masaža, sportska masaža, opuštajuća masaža, Mostar, fizioterapeut, Lorenco Perić"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
