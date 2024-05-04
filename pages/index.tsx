import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Usluge from "./components/Usluge";
import About from "./components/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
  description: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
};

export default function Home() {
  return (
    <main className={`mx-auto ${inter.className}`}>
      <section className="one" id="masaza">
        <Hero />
      </section>
      <section className="three" id="o-meni">
        <About />
      </section>
      <section className="two" id="usluge">
        <Usluge />
      </section>
      {/* <section className="four" id="kontakt">
        <h1>Cjenik?</h1>
      </section> */}
    </main>
  );
}
