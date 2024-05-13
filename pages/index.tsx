import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Usluge from "./components/Usluge";
import About from "./components/About";
import Cjenik from "./components/Cjenik";
import FAQ from "./components/FAQ";
import Kontakt from "./components/Kontakt";
import GoToTop from "./components/GoToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
  description: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
};

export default function Home() {
  return (
    <main className={`mx-auto ${inter.className}`}>
      <section className="one section-helper min-height" id="pocetna">
        <Hero />
      </section>
      <section className="two min-height" id="o-meni">
        <About />
      </section>
      <section className="three min-height" id="usluge">
        <Usluge />
      </section>
      <section className="four min-height" id="cjenik">
        <Cjenik />
      </section>
      <section className="five" id="pitanja">
        <FAQ />
      </section>
      <section className="six" id="kontakt">
        <Kontakt />
      </section>
      <GoToTop />
    </main>
  );
}
