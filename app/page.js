'use client';
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <>
      {/* <header>
        <Header/>
      </header> */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff]">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="self-end mb-4">
            <LanguageSwitcher />
          </div>
          <Image src="/logo.png" alt="Mechnova Logo" width={320} height={120} className="mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0072ce] drop-shadow-lg mb-4">
            {t('comingSoon.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
            {t('comingSoon.description')}
          </p>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-gray-500">{t('comingSoon.urgentInquiry')}</span>
            <a href="mailto:rahul@mechnovamachines.com" className="text-[#0072ce] font-semibold underline">rahul@mechnovamachines.com</a>
            <a href="tel:+919667515523" className="text-[#0072ce] font-semibold underline">+91 96675 15523</a>
          </div>
        </div>
      </main>
      {/* <footer>
        <Footer/>
      </footer> */}
    </>
  );
}
