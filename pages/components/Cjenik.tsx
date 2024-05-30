import SkupSlika from "./SkupSlika";
import { useEffect, useRef } from "react";

export default function Cjenik() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const secondContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === imageContainerRef.current) {
            entry.target.classList.add("slide-in-from-left");
          } else {
            entry.target.classList.add("slide-in-from-left");
          }
        }
      });
    }, observerOptions);

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === secondContainerRef.current) {
            entry.target.classList.add("slide-in-from-right");
          } else {
            entry.target.classList.add("slide-in-from-right");
          }
        }
      });
    }, observerOptions);

    if (secondContainerRef.current) {
      observer1.observe(secondContainerRef.current);
    }

    return () => {
      if ((secondContainerRef as any).current) {
        observer1.unobserve((secondContainerRef as any).current);
      }
    };
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-gray-600 font-bold">CJENIK</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Koliko To Košta?
        </h2>
      </div>
      <div className="max-w-[1280px] py-8 flex justify-center items-center flex-col md:flex-row">
        <div className="mx-4 mb-6 md:mb-0" ref={imageContainerRef}>
          <div className="relative flex flex-col">
            <table className="w-full text-sm text-gray-500 mb-6 text-left">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-[#e66465] to-[#9198e5] ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Vrsta masaže
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Trajanje
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Cijena
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Relax/Opuštajuća
                  </th>
                  <td className="px-4 py-4">60 min</td>
                  <td className="px-4 py-4">40 KM</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Klasična
                  </th>
                  <td className="px-4 py-4">60 min</td>
                  <td className="px-4 py-4">50 KM</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Sportska
                  </th>
                  <td className="px-4 py-4">60 min</td>
                  <td className="px-4 py-4">60 KM</td>
                </tr>

                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Limfna Drenaža
                  </th>
                  <td className="px-4 py-4">Tretman</td>
                  <td className="px-4 py-4">60 KM</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    *Elektropunkcija
                  </th>
                  <td className="px-4 py-4">Tretman</td>
                  <td className="px-4 py-4">20 KM</td>
                </tr>
              </tbody>
            </table>
            <span className="text-sm text-gray-600 italic m-2">
              *Nadoplata uz masažu.
            </span>
            <a
              href="#kontakt"
              className="card-shadow inline-flex items-center justify-center px-5 py-3 mr-3 mt-2 text-base font-medium text-center text-white rounded-lg gradient-pozadina hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900  w-full md:w-[250px]"
            >
              Kontakt
              <svg
                className="w-7 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-4 mb-6 md:mb-0" ref={secondContainerRef}>
          <SkupSlika />
        </div>
      </div>
    </>
  );
}
