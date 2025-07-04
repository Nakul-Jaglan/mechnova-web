'use client';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

function ContactPage() {
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
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-16">
        {/* Hero Section */}
        <section className="relative w-full h-72 md:h-[420px] flex items-center justify-center overflow-hidden mb-12">
          <Image
            src="/contact.png"
            alt="Contact Us Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </section>

        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0072ce] drop-shadow-lg mb-8">Get in Touch</h1>
        </div>

        {/* Contact Form (full width) */}
        <section className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-start mb-12">
            <h2 className="text-2xl font-bold text-[#0072ce] mb-2">Send Us a Message</h2>
            <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                    <div className="w-full">
                        <label htmlFor="fullname" className="block text-gray-700 font-semibold mb-1">Full Name*</label>
                        <input type="text" id="fullname" name="fullname" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address*</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone Number*</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="company" className="block text-gray-700 font-semibold mb-1">Company</label>
                        <input type="text" id="company" name="company" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="requirement" className="block text-gray-700 font-semibold mb-1">Requirement*</label>
                        <select id="requirement" name="requirement" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none">
                        <option value="">Select</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Dealer">Dealer</option>
                        <option value="General Enquiry">General Enquiry</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="productInterest" className="block text-gray-700 font-semibold mb-1">Product Interest</label>
                        <input type="text" id="productInterest" name="productInterest" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="city" className="block text-gray-700 font-semibold mb-1">City</label>
                        <input type="text" id="city" name="city" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">Country*</label>
                        <input type="text" id="country" name="country" required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="designation" className="block text-gray-700 font-semibold mb-1">Designation</label>
                        <input type="text" id="designation" name="designation" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">Subject</label>
                        <input type="text" id="subject" name="subject" className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message*</label>
                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded border border-gray-300 focus:border-[#0072ce] focus:outline-none" />
                </div>
                <button type="submit" className="mt-2 px-6 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer">Send Message</button>
            </form>
          </div>
        </section>

        {/* Contact Details (below form) */}
        <section className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center text-center gap-6">
            <h2 className="text-3xl font-bold text-[#0072ce] mb-2">Contact Information</h2>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#0072ce] mb-4">Thank You!</h3>
              <p className="text-gray-700 text-lg mb-6 text-center">Your message has been received. We appreciate your interest and will get back to you soon.</p>
              <button onClick={handleCloseModal} className="px-6 py-2 bg-[#0072ce] text-white rounded-full font-semibold hover:bg-[#005FA3] transition">Close</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;