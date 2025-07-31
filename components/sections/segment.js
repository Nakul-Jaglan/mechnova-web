'use client';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

function Segment() {
  const { t } = useTranslation();

  const segments = [
    {
      title: t('home.segments.gardeningForestry.title'),
      image: "/segment/gardening.webp",
      link: "/products/",
      desc: t('home.segments.gardeningForestry.description'),
    },
    {
      title: t('home.segments.fumigation.title'),
      image: "/segment/fumigation.webp",
      link: "/products/",
      desc: t('home.segments.fumigation.description'),
    },
    {
      title: t('home.segments.diesel.title'),
      image: "/segment/diesel.webp",
      link: "/products/",
      desc: t('home.segments.diesel.description'),
    },
    {
      title: t('home.segments.domestic.title'),
      image: "/segment/domestic.webp",
      link: "/products/",
      desc: t('home.segments.domestic.description'),
    },
    {
      title: t('home.segments.agroIndustrial.title'),
      image: "/segment/agro-industrial.webp",
      link: "/products/",
      desc: t('home.segments.agroIndustrial.description'),
    },
  ];

  return (
    <section className="w-full py-8 bg-white" id="segments">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          {t('home.segments.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((seg, i) => (
            <div key={i}
              className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.05] transition-transform duration-300"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={seg.image}
                  alt={seg.title}
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-2xl mb-2 text-center text-gray-900 hover:text-[#0072ce]">
                  {seg.title}
                  </h3>
                  <p className="text-gray-600 text-base text-center flex-1">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Segment;