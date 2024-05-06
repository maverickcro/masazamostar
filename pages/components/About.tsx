import Image from "next/image";
import InfoCard from "./InfoCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation("yearsCounter", 0, 5, 1500);
  useScrollAnimation("clientsCounter", 0, 50, 1500);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <span className="text-gray-600 font-bold">O MENI</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Upoznajmo Se
        </h2>
      </div>
      <div className="grid max-w-[1280px] px-4 pb-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12 ">
        <div className="col-span-4">
          <InfoCard />
        </div>
        <div className="col-span-4">
          <Image
            src="/lorenco.png"
            alt="Lorenco"
            height={350}
            width={350}
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div className="col-span-4 flex flex-col space-y-4">
          <div
            className="flex justify-between flex-grow-0 flex-shrink-0 px-4"
            style={{ height: "33.33%" }}
          >
            <div className="stats card-shadow flex flex-col items-center justify-center p-4 bg-gray-200 rounded">
              <div className="flex">
                <span id="yearsCounter" className="years text-3xl font-bold">
                  4
                </span>
                <span className="years text-3xl font-bold">+</span>
              </div>
              <span className="text-sm">Godine Iskustva</span>
            </div>
            <div className="stats card-shadow flex flex-col items-center justify-center p-4 bg-gray-200 rounded">
              <div className="flex">
                <span id="clientsCounter" className="years text-3xl font-bold">
                  0
                </span>
                <span className="years text-3xl font-bold">+</span>
              </div>
              <span className="text-sm">Klijenata</span>
            </div>
          </div>
          <ul className="flex-grow flex-shrink" style={{ height: "66.66%" }}>
            <li className="flex items-center space-x-2">
              <svg
                className="w-[6.5rem] h-[6.5rem] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>

              <span>
                Širok spektar tehnika masaže. Svaka sesija je prilagođena da
                odgovara vašim specifičnim potrebama.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-[6.5rem] h-[6.5rem] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>

              <span>
                Znanje koristim kako bih pružio najbolju moguću njegu, uvijek s
                ljubavlju prema onome što radim.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-[6.5rem] h-[6.5rem] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>

              <span>
                Kontinuirano se usavršavam u području fizioterapije što je
                rezultiralo s nizom profesionalnih certifikata.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
