import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setBounce(true);
    const timer = setTimeout(() => setBounce(false), 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="max-w-[1280px] px-4 pb-8 mx-auto flex flex-col md:flex-row">
      <div
        className={`img-container mt-0 mb-10 md:mb-0 lg:flex md:order-2 transition-opacity duration-500 ${
          isLoaded ? "slide-in-from-right" : "opacity-0"
        }`}
      >
        <div className="background"></div>
        <Image
          src="/slika1.jpg"
          alt="Masaza Mostar"
          width={450}
          height={450}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-2 lg:px-10 flex flex-col justify-center items-start transition-opacity duration-500">
        <span
          className={`text-gray-800 ${
            isLoaded ? "slide-in-from-bottom-slow" : "opacity-0"
          }`}
        >
          Dobrodošli
        </span>
        <h1
          className={`max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black ${
            isLoaded ? "slide-in-from-bottom" : "opacity-0"
          }`}
        >
          Budite{" "}
          <span className=" bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:100%_6px] sm:bg-[length:100%_10px] bg-no-repeat bg-bottom">
            Najbolja
          </span>{" "}
          Verzija Sebe
        </h1>
        <p
          className={`max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ${
            isLoaded ? "slide-in-from-bottom-slow" : "opacity-0"
          }`}
        >
          Masaža nije luksuz, već ključna aktivnost za relaksaciju, oslobađanje
          od stresa i boli. Prepustite se iskusnim rukama i osjetite razliku.
        </p>
        <a
          href="#kontakt"
          className={`card-shadow inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg gradient-pozadina hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-full md:w-[250px] ${
            bounce ? "bounce" : ""
          }`}
        >
          Kontakt
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
    </div>
  );
}
