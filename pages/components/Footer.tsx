"use client";
import Link from "next/link";
import { useEffect } from "react";
// import ToggleMode from "./ToggleMode";

export default function Footer() {
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
    <footer className="bg-white rounded-lg shadow px-6  m-4">
      <div className="w-full max-w-4xl mx-auto p-4 md:py-8 text-center">
        <div className="flex text-center justify-center">
          <Link href="#nula" className="space-x-3 rtl:space-x-reverse">
            <span className="text-base font-semibold">
              WEB STRANICA U IZRADI 🛠️
            </span>
          </Link>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="https://www.calorie-pal.com/" className="hover:underline">
            MaverickDesign
          </Link>
        </span>
      </div>
    </footer>
  );
}
