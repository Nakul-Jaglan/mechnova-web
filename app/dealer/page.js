"use client";
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

function DealerPage() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const timerRef = useRef(null);
  const formRef = useRef(null);

  // Redirect to home after 5 seconds or on modal close
  useEffect(() => {
    if (showModal) {
      timerRef.current = setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.href = '/';
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff]'>
        <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
        <section className="relative w-full flex items-center justify-center overflow-hidden mb-10">
          <img
            src="/mechnova/banner/banner-m.webp"
            alt="Become a Dealer Hero"
            className=" "
          />
        </section>
          
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4 mb-10">
          <h1 className="flex-1 text-center text-4xl md:text-5xl font-bold text-[#0072ce] drop-shadow-lg">
            {t('dealer.title')}
          </h1>
        </div>
        
        <section className="container mx-auto px-4 max-w-2xl pb-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-start">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-2">{t('dealer.formTitle')}</h2>
            <form ref={formRef} className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <div className="w-full">
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-1">{t('dealer.companyName')}*</label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">{t('dealer.email')}*</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">{t('dealer.phoneNumber')}*</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">{t('dealer.address')}*</label>
                  <input type="text" id="address" name="address" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="postal" className="block text-gray-700 font-semibold mb-1">{t('dealer.postalCode')}*</label>
                  <input type="text" id="postal" name="postal" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="city" className="block text-gray-700 font-semibold mb-1">{t('dealer.city')}*</label>
                  <input type="text" id="city" name="city" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">{t('dealer.country')}*</label>
                  <input type="text" id="country" name="country" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="brands" className="block text-gray-700 font-semibold mb-1">{t('dealer.currentBrands')}</label>
                  <input type="text" id="brands" name="brands" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" id="consent" name="consent" required className="mt-1" />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  {t('dealer.consentText')}
                </label>
              </div>
              <button type="submit" className="mt-2 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer">
                {t('dealer.submit')}
              </button>
            </form>
          </div>
        </section>
        {/* Thank You Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#0072ce] mb-4">{t('dealer.thankYou')}</h3>
              <p className="text-gray-700 mb-6 text-center">
                {t('dealer.thankYouMessage')}<br />
                {t('dealer.redirectMessage')}
              </p>
              <button onClick={handleCloseModal} className="px-6 py-2 bg-[#0072ce] text-white rounded-full font-semibold hover:scale-105 transition">
                {t('dealer.close')}
              </button>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default DealerPage;