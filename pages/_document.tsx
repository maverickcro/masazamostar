import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
        <GoToTop />
      </body>
    </Html>
  );
}
