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
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#nula"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Masaža Mostar
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
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
