"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/hero/hero-banner.jpg",
  "/hero/hero-banner.jpg",
  "/hero/hero-banner.jpg",
  "/hero/hero-banner.jpg"
];

export default function HeroSlider() {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      indexRef.current = (indexRef.current + 1) % images.length;
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * indexRef.current,
        behavior: "smooth"
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="w-full h-[400px] flex overflow-x-auto scroll-smooth snap-x snap-mandatory relative"
      style={{scrollbarWidth: "none"}}
    >
      {images.map((src, i) => (
        <div key={i} className="w-full flex-shrink-0 h-full relative snap-center">
          <Image
            src={src}
            alt={`Hero Slide ${i+1}`}
            fill
            style={{objectFit: 'cover'}}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
