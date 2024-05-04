"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import ToggleMode from "./ToggleMode";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={`px-6 fixed top-0 left-0 right-0 drop-shadow-md z-10 transition-all duration-300 ease-in-out ${
        shrink
          ? "bg-white dark:bg-slate-900 h-12 md:h-16"
          : "bg-white dark:bg-slate-900 py-2 md:py-7 h-20 md:h-24"
      }`}
    >
      <div className="prose max-w-4xl prose-xl mx-auto flex flex-col md:flex-row justify-between items-center h-[100%]">
        <p className="text-3xl font-bold grid mb-0">
          <Link
            href="#masaza"
            className="logo-animation font-bold text-gradient no-underline"
          >
            Masaža Mostar
          </Link>
        </p>
        <div className="flex flex-row justify-center items-center sm:justify-evenly sm:items-center gap-4 text-base">
          <Link
            className="transition logo-animation font-bold no-underline navbar-link text-black dark:text-white text-sm md:text-base"
            href="#o-meni"
          >
            O Meni
          </Link>
          <Link
            className="transition logo-animation font-bold no-underline navbar-link text-black dark:text-white text-sm md:text-base"
            href="#usluge"
          >
            Usluge
          </Link>
          <Link
            className="transition logo-animation font-bold no-underline navbar-link text-black dark:text-white text-sm md:text-base"
            href="#cjenik"
          >
            Cjenik
          </Link>
          <Link
            className="transition logo-animation font-bold no-underline navbar-link text-black dark:text-white text-sm md:text-base"
            href="#kontakt"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
