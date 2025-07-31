import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

function About() {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 bg-[#0072ce]">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">{t('home.about.title')} <span className="text-[#ffffff]"> Mechnova?</span></h2>
         
          <p className="text-gray-200 text-lg font-semibold mb-4">
            {t('home.about.reason1')}
          </p>

          <p className="text-gray-200 text-lg mb-4">
            {t('home.about.reason2')}
          </p>

          <p className="text-gray-200 text-lg mb-4">
            {t('home.about.reason3')}
          </p>

          <p className="text-gray-200 text-lg font-semibold mb-4">
            {t('home.about.reason4')}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-100 h-100 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/mechnova/banner/Forestry.webp"
              alt="About Mechnova"
              fill
              className="object-contain bg-gray-100"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
