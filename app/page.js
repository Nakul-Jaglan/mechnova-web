"use client";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import About from "@/components/sections/about";
import Faqs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import Industries from "@/components/sections/industries";
import Products from "@/components/sections/products";
import Segment from "@/components/sections/segment";
import Social from "@/components/sections/social";
import Testimonials from "@/components/sections/testimonials";
import LanguageSwitcher from "@/components/LanguageSwitcher.js";
import Link from "next/link";
import { useTranslation } from '@/lib/useTranslation'
import House from "@/components/sections/house";

export default function HomePage() {
    const { t } = useTranslation();
    
  return (
    <>
        <header>
            <Header/>
        </header>

        <main>
            <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
            {/* Language Switcher positioned over the hero section */}
            <div className="relative">
                {/* <div className="absolute top-4 right-4 z-10">
                    <LanguageSwitcher />
                </div> */}
                <Hero/>
            </div>
            <House/>
            <Segment/>
            <About/>
            <Products/>
            <Industries/>
            {/* <Social/> */}
            {/* <Testimonials/> */}
            <Faqs/>
            
            {/* Call to Action */}
            <section className="w-full py-16 bg-[#0072ce]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-0">{t('about.cta')}</div>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-white text-[#0072ce] font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer">
                        {t('about.ctaButton')}
                        </button>
                    </Link>
                </div>
            </section>
        </main>
        
        <footer>
            <Footer/>
        </footer>
    </>
  );
}
