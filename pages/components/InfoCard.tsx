import { useEffect, useRef } from "react";
import React from "react";

function InfoCard() {
  const imageContainerRef = useRef<HTMLDivElement>(null);

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
            entry.target.classList.add("slide-in-from-right");
          }
        }
      });
    }, observerOptions);

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    return () => {
      if ((imageContainerRef as any).current) {
        observer.unobserve((imageContainerRef as any).current);
      }
    };
  }, []);

  return (
    <div
      className="px-2 lg:px-10 flex flex-col justify-center"
      ref={imageContainerRef}
    >
      <span className="text-gray-700">Tko sam ja?</span>
      <h2 className="text-4xl font-bold mb-6">
        Lorenco Perić - Dipl. fizioterapeut
      </h2>
      <p className="text-base text-gray-900 mb-6">
        Neka vaša briga o zdravlju počne kod mene. S godinama iskustva kao
        fizioterapeut, nudim masaže koje su prilagođene upravo vašim potrebama.
        Bilo da se oporavljate od ozljede, borite se sa stresom ili jednostavno
        želite poboljšati svoje opće stanje, tu sam za vas.
      </p>
      <a
        href="#usluge"
        className="card-shadow inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg gradient-pozadina hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-full md:w-[250px]"
      >
        Usluge
        <svg
          className="w-5 h-5 ml-2 -mr-1"
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
  );
}

export default InfoCard;
