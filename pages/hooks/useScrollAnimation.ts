import { useEffect } from "react";

const animateValue = (
  id: string,
  start: number,
  end: number,
  duration: number
): void => {
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

const useScrollAnimation = (
  id: string,
  start: number,
  end: number,
  duration: number
): void => {
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const counterPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (counterPosition < screenPosition) {
          animateValue(id, start, end, duration);
          window.removeEventListener("scroll", onScroll);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); // Cleanup listener when component unmounts or dependencies change
  }, [id, start, end, duration]);
};

export default useScrollAnimation;
