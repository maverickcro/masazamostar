import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
  description: "Masaza Mostar by Lorenzo - Relax i Sportska Masaza",
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hello
    </main>
  );
}
