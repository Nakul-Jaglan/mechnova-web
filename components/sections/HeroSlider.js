"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from '@/lib/useTranslation';

const images = [
  "/mechnova/banner/website-banner1.webp",
  "/mechnova/banner/website-banner2.webp",
  "/mechnova/banner/website-banner3.webp",
  "/mechnova/banner/website-banner4.webp",
];

const EnglishImages = [
  "/mechnova/banner/english-website-banner1.webp",
  "/mechnova/banner/english-website-banner2.webp",
  "/mechnova/banner/english-website-banner3.webp",
  "/mechnova/banner/english-website-banner4.webp",
];

export default function HeroSlider() {
  const { locale } = useTranslation();
  const sliderRef = useRef(null);
  const indexRef = useRef(0);
  
  // Select images based on language
  const selectedImages = locale === 'en' ? EnglishImages : images;
  
  // Duplicate images for infinite effect
  const infiniteImages = [...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages];
  const total = infiniteImages.length;
  const visibleCount = selectedImages.length;

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
  }, [selectedImages, visibleCount, total]); // Added dependencies for when images change

  return (
    <div
      ref={sliderRef}
      className=" h-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory "
      style={{scrollbarWidth: "none"}}
    >
      {infiniteImages.map((src, i) => (
        <div key={i} className="w-full flex-shrink-0 h-full relative snap-center">
          <img
            src={src}
            alt={`Hero Slide ${(i % visibleCount) + 1}`}
            style={{objectFit: 'cover'}}
          />
        </div>
      ))}
    </div>
  );
}