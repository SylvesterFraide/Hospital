import gsap from "gsap";
import { useRef, useEffect } from "react";

export const AnimatedNumber = ({ start, end }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    gsap.to(
      numberRef.current,
      {
        textContent: end,
        duration: 3,
        ease: "power1.inOut",
      }
    );
  }, [end]);

  return (
    <div>
      <span ref={numberRef}>{start}</span>
    </div>
  );
};
