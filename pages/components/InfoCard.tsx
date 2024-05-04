import { useEffect } from "react";
import React from "react";

const animateValue = (
  id: string,
  start: number,
  end: number,
  duration: number
) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = value.toString();
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const initScrollAnimation = () => {
  const onScroll = () => {
    const element = document.getElementById("counter");
    if (element) {
      const counterPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (counterPosition < screenPosition) {
        animateValue("counter", 0, 5, 2000); // Animate over 2000 milliseconds or 2 seconds
        window.removeEventListener("scroll", onScroll);
      }
    }
  };

  window.addEventListener("scroll", onScroll);
};

function InfoCard() {
  useEffect(() => {
    initScrollAnimation();
  }, []);
  return (
    <div className="info-card-container">
      <div className="content">
        <h1>Dipl. fizioterapeut - Lorenco Perić</h1>
        <p>
          Neka vaša briga o zdravlju počne kod mene. S godinama iskustva kao
          fizioterapeut, nudim masaže koje su prilagođene upravo vašim
          potrebama. Bilo da se oporavljate od ozljede, borite se sa stresom ili
          jednostavno želite poboljšati svoje opće stanje, tu sam za vas.
        </p>
      </div>
      <div className="stats card-shadow">
        <span id="counter" className="years">
          0
        </span>
        <span>Godina Iskustva</span>
      </div>
    </div>
  );
}

export default InfoCard;
