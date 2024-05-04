import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Usluge from "./components/Usluge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
  description: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
};

export default function Home() {
  return (
    <main className={`mx-auto ${inter.className}`}>
      <section className="one" id="nula">
        <Hero />
      </section>
      <section className="two" id="jedan">
        <Usluge />
      </section>
      {/* <section className="three" id="dva">
        <h1>Cjenik?</h1>
      </section>
      <section className="four" id="tri">
        <h1>Kontakt?</h1>
      </section> */}
    </main>
  );
}
