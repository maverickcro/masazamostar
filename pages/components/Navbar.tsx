"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const useSmoothScroll = () => {
    useEffect(() => {
      const handleSmoothScroll = (e: any) => {
        const href = e.currentTarget.getAttribute("href");
        if (href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }
        }
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", handleSmoothScroll);
      });

      return () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.removeEventListener("click", handleSmoothScroll);
        });
      };
    }, []);
  };
  useSmoothScroll();
  return (
    <nav
      className={`px-6 fixed top-0 left-0 right-0 drop-shadow-md z-10 transition-all duration-300 ease-in-out bg-white py-2 md:py-7 h-20 md:h-24"
      }`}
    >
      <div className="prose max-w-4xl prose-xl mx-auto flex flex-col md:flex-row justify-between items-center h-[100%]">
        <p className="text-3xl font-bold grid mb-0">
          <Link
            href="#pocetna"
            className=" font-bold text-gradient no-underline "
          >
            <Image src="/logo.png" width={120} height={100} alt="logo" />
          </Link>
        </p>
        <div className="flex flex-row justify-center items-center sm:justify-evenly sm:items-center gap-4 text-base">
          <Link
            className=" font-bold no-underline text-black text-sm md:text-base gradient-hover-text"
            href="#o-meni"
          >
            O Meni
          </Link>
          <Link
            className="transition font-bold no-underline text-black text-sm md:text-base gradient-hover-text"
            href="#usluge"
          >
            Usluge
          </Link>
          <Link
            className="transition font-bold no-underline text-black text-sm md:text-base gradient-hover-text"
            href="#cjenik"
          >
            Cjenik
          </Link>
          <Link
            className="transition font-bold no-underline text-black text-sm md:text-base gradient-hover-text"
            href="#pitanja"
          >
            Pitanja
          </Link>
          <Link
            className="transition font-bold no-underline text-black text-sm md:text-base gradient-hover-text"
            href="#kontakt"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
