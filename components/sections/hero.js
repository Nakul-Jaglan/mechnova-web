import HeroSlider from "./HeroSlider";
import { useTranslation } from "@/lib/useTranslation";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="w-full">
        <HeroSlider/>
        <div className="mx-auto px-4 py-8 border-b border-gray-300 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">{t('home.welcome')}</h1>
            <p className="text-center text-lg mb-6 max-w-4xl mx-auto text-gray-700">
              {t('home.heroDescription')}
            </p>
        </div>
    </section>
  );
}

export default Hero;
