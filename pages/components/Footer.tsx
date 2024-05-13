"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";

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
    <footer className="bg-white px-6  m-4">
      <div className="w-full max-w-4xl mx-auto p-4 md:py-8 text-center">
        <div className="flex text-center justify-between">
          <Image src="/logo.png" width={120} height={100} alt="logo" />
          <div className="flex space-x-4">
            <a
              href="https://www.masaza-mostar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full shadow-lg bg-gradient-to-bl from-[#e66465] to-[#9198e5]"
            >
              <FaInstagram className="text-white text-2xl" />
            </a>
            <a
              href="https://www.tiktok.com/@alex_and_coco?_t=8mFwI38ryju&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full shadow-lg bg-gradient-to-bl from-[#e66465] to-[#9198e5]"
            >
              <FaTiktok className="text-white text-2xl" />
            </a>
          </div>
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
