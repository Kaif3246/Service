// FloatingDots.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingDots = () => {
  const dotsRef = useRef(null);

  useEffect(() => {
    const dots = dotsRef.current.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
      gsap.to(dot, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
        scale: gsap.utils.random(0.8, 1.2),
        opacity: gsap.utils.random(0.3, 0.8),
        duration: gsap.utils.random(2, 4),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <div
      ref={dotsRef}
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{}}
    >
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="dot absolute bg-red-500 rounded-full"
          style={{
            width: 12,
            height: 12,
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            opacity: 0.5,
          }}
        ></span>
      ))}
    </div>
  );
};

export default FloatingDots;
