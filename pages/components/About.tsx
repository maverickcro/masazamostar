import { useEffect, useRef } from "react";
import Image from "next/image";
import InfoCard from "./InfoCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation("yearsCounter", 0, 5, 1500);
  useScrollAnimation("clientsCounter", 0, 60, 1500);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === imageContainerRef.current) {
            entry.target.classList.add("slide-in-from-bottom");
          } else {
            entry.target.classList.add("slide-in-from-right");
          }
        }
      });
    }, observerOptions);

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    listItemsRef.current.forEach((item, index) => {
      if (item) {
        item.classList.add(`delay-${index + 1}`);
        observer.observe(item);
      }
    });

    return () => {
      if ((imageContainerRef as any).current) {
        observer.unobserve((imageContainerRef as any).current);
      }
      (listItemsRef as any).current.forEach((item: any) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-gray-600 font-bold">O MENI</span>
        <h2 className="text-3xl font-bold my-3 pb-4 bg-gradient-to-r from-[#e66465] to-[#9198e5] bg-[length:60%_6px] bg-no-repeat bg-bottom">
          Upoznajmo Se
        </h2>
      </div>
      <div className="max-w-[1280px] flex flex-col md:flex-row md:flex-wrap lg:flex-row w-full px-4 py-8 justify-center items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <InfoCard />
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div
            className="flex justify-center items-center p-4"
            style={{ height: "33.33%" }}
          >
            <div className="stats card-shadow flex flex-col items-center justify-center p-4 m-4">
              <div className="flex">
                <span id="yearsCounter" className="years text-3xl font-bold">
                  4
                </span>
                <span className="years text-3xl font-bold">+</span>
              </div>
              <span className="text-sm">Godine Iskustva</span>
            </div>
            <div className="stats card-shadow flex flex-col items-center justify-center p-4 m-4">
              <div className="flex">
                <span id="clientsCounter" className="years text-3xl font-bold">
                  0
                </span>
                <span className="years text-3xl font-bold">+</span>
              </div>
              <span className="text-sm">Klijenata</span>
            </div>
          </div>

          <ul
            className="flex-grow flex-shrink custom-list"
            style={{ height: "66.66%" }}
          >
            {[
              "Širok spektar tehnika masaže. Svaka sesija je prilagođena da odgovara vašim specifičnim potrebama.",
              "Znanje koristim kako bih pružio najbolju moguću njegu, uvijek s ljubavlju prema onome što radim.",
              "Kontinuirano se usavršavam u području fizioterapije što je rezultiralo s nizom profesionalnih certifikata.",
            ].map((text, index) => (
              <li
                key={index}
                ref={(el: any) => (listItemsRef.current[index] = el)}
                className="flex items-center space-x-2 slide-in-from-right"
                style={{ opacity: 0 }}
              >
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
