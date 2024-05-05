import React from "react";

function InfoCard() {
  return (
    <div className="flex flex-col justify-center items-centerp-[20px] h-full">
      <span className="text-gray-700">Tko sam ja?</span>
      <h1 className="text-4xl font-bold mb-6">
        Lorenco Perić - Dipl. fizioterapeut
      </h1>
      <p className="text-base mb-6">
        Neka vaša briga o zdravlju počne kod mene. S godinama iskustva kao
        fizioterapeut, nudim masaže koje su prilagođene upravo vašim potrebama.
        Bilo da se oporavljate od ozljede, borite se sa stresom ili jednostavno
        želite poboljšati svoje opće stanje, tu sam za vas.
      </p>
      <a
        href="#usluge"
        className="card-shadow inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg gradient-pozadina hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
