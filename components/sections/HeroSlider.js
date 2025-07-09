"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  // "/mechnova/banner/banner-m.webp",
  "/mechnova/banner/website-banner1.webp",
  // "/mechnova/banner/website-banner2.webp",
  "/mechnova/banner/website-banner3.webp",
  "/mechnova/banner/website-banner4.webp",
];

export default function HeroSlider() {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);
  // Duplicate images for infinite effect
  const infiniteImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images];
  const total = infiniteImages.length;
  const visibleCount = images.length;

  useEffect(() => {
    if (!sliderRef.current) return;
    // Start at the first set
    sliderRef.current.scrollLeft = sliderRef.current.offsetWidth * visibleCount;
    indexRef.current = visibleCount;
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      indexRef.current++;
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * indexRef.current,
        behavior: "smooth"
      });
      // If at the end, reset to the middle set instantly (no animation)
      if (indexRef.current === total - visibleCount) {
        setTimeout(() => {
          if (!sliderRef.current) return;
          sliderRef.current.scrollTo({
            left: sliderRef.current.offsetWidth * visibleCount,
            behavior: "auto"
          });
          indexRef.current = visibleCount;
        }, 400); // Wait for smooth scroll to finish
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="w-full h-[400px] flex overflow-x-auto scroll-smooth snap-x snap-mandatory relative"
      style={{scrollbarWidth: "none"}}
    >
      {infiniteImages.map((src, i) => (
        <div key={i} className="w-full flex-shrink-0 h-full relative snap-center">
          <Image
            src={src}
            alt={`Hero Slide ${(i % visibleCount) + 1}`}
            fill
            style={{objectFit: 'cover'}}
            priority={i === visibleCount}
          />
        </div>
      ))}
    </div>
  );
}
