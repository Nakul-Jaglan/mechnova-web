'use client';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/useTranslation';

function ContactPage() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const timeoutRef = useRef();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true);
    timeoutRef.current = setTimeout(() => {
      setShowModal(false);
      router.push('/');
    }, 5000);
  }

  function handleCloseModal() {
    setShowModal(false);
    clearTimeout(timeoutRef.current);
    router.push('/');
  }

  return (
    <>
      <header>
        <Header />
      </header>
      
      <main className="min-h-screen bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-16">
        {/* Hero Section */}
        <section className="relative w-full flex items-center justify-center overflow-hidden mb-12">
          <img
            src="/mechnova/banner/banner-m.webp"
            alt="Contact Us Hero"
            className="object-cover object-center"
          />
        </section>

        <div className="flex flex-col items-center justify-center text-center px-4 mb-8">
          <div className="flex justify-between items-center w-full">
            <div className="flex-1"></div>
            <h1 className="flex-1 text-4xl md:text-5xl font-extrabold text-[#0072ce] drop-shadow-lg">
              {t('contact.getInTouch')}
            </h1>
            <div className="flex-1 flex justify-end">
              {/* LanguageSwitcher removed */}
            </div>
          </div>
        </div>

        {/* Contact Form (full width) */}
        <section className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gray-100 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-start mb-12">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-2">{t('contact.sendMessage')}</h2>
            <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="w-full">
                  <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-1">{t('contact.fullName')}*</label>
                  <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">{t('contact.email')}*</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">{t('contact.phone')}*</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-1">{t('contact.company')}</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="requirement" className="block text-gray-700 font-semibold mb-1">{t('contact.requirement')}</label>
                  <select id="requirement" name="requirement" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none">
                    <option value="">{t('contact.requirement')}</option>
                    <option value="buyer">{t('contact.requirements.buyer')}</option>
                    <option value="dealer">{t('contact.requirements.dealer')}</option>
                    <option value="general">{t('contact.requirements.generalEnquiry')}</option>
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-1">{t('contact.productInterest')}</label>
                  <input type="number" id="quantity" name="quantity" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="city" className="block text-gray-700 font-semibold mb-1">{t('contact.city')}*</label>
                  <input type="text" id="city" name="city" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">{t('contact.country')}*</label>
                  <input type="text" id="country" name="country" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="designation" className="block text-gray-700 font-semibold mb-1">{t('contact.designation')}</label>
                  <input type="text" id="designation" name="designation" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <div className="w-full">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">{t('contact.subject')}</label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
              </div>
                <div className="w-full">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">{t('contact.message')}</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <button type="submit" className="mt-2 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer">
                  {t('contact.sendButton')}
                </button>
            </form>
          </div>
        </section>

        {/* Contact Details (below form) */}
        <section className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gray-100 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-start gap-6">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-2">{t('contact.contactInfo')}</h2>
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <FaEnvelope className="text-[#0072ce]" />
              <Link href="mailto:rahul@mechnovamachines.com" className="hover:underline">rahul@mechnovamachines.com</Link>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <FaPhoneAlt className="text-[#0072ce]" />
              <Link href="tel:+919667515523" className="hover:underline">+91 96675 15523</Link>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <FaWhatsapp className="text-[#25D366]" />
              <Link href="https://wa.me/919667515523" target="_blank" rel="noopener noreferrer" className="hover:underline">+91 96675 15523</Link>
            </div>
            <div className="flex items-start gap-3 text-lg text-gray-800">
              <svg className="w-6 h-6 text-[#0072ce] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /></svg>
              <span>2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122015</span>
            </div>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/mechnovamachines" target="_blank" rel="noopener noreferrer" className="text-[#005FA3] text-2xl hover:scale-110 transition"><FaFacebook /></Link>
              <Link href="https://www.instagram.com/mechnovamachines/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-2xl hover:scale-110 transition"><FaInstagram /></Link>
              <Link href="https://wa.me/919667515523" target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-2xl hover:scale-110 transition"><FaWhatsapp /></Link>
            </div>
          </div>
        </section>

        {/* Thank You Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center mx-4">
              <h3 className="text-2xl font-bold text-[#0072ce] mb-4">{t('contact.thankYou')}</h3>
              <p className="text-gray-700 mb-6 text-center">
                {t('contact.thankYouMessage')}<br />
                {t('contact.redirectMessage')}
              </p>
              <button onClick={handleCloseModal} className="px-6 py-2 bg-[#0072ce] text-white rounded-full font-semibold hover:scale-105 transition">
                {t('contact.close')}
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

export default ContactPage;