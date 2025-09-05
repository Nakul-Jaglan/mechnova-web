"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useTranslation } from "@/lib/useTranslation";

function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="fixed flex items-center justify-between p-4 bg-[#E6F2FB] text-gray-900 w-full z-50 shadow-xl">
        <div className="flex flex-row items-center space-x-4">
          <Link href="/" >
            <Image
              src="/logo.png"
              alt="Mechnova Logo"
              width={200}
              height={50}
            />
          </Link>
          {/* <Link href="/" >
            <h1 className="text-3xl">Mechnova</h1>
          </Link> */}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <FaBars className="w-7 h-7" />
        </button>
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-xl">
            <li><Link href="/" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-md cursor-pointer">{t('header.home')}</Link></li>
            <li><Link href="/about" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-md cursor-pointer">{t('header.about')}</Link></li>
            <li><Link href="/products" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-md cursor-pointer">{t('header.products')}</Link></li>
            <li><Link href="/dealer" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-md cursor-pointer">{t('header.dealer')}</Link></li>
            <li><Link href="/contact" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-md cursor-pointer">{t('header.contact')}</Link></li>
          </ul>
        </nav>
        <div className="text-xl flex flex-row items-center space-x-4">
          <Link href={"tel:+919995900918"} className="hover:text-[#3394E6] flex items-center space-x-2">
            <FaPhoneAlt className="text-white sm:text-black p-2 sm:p-0 text-4xl sm:text-xl rounded-full sm:rounded-none bg-[#0072ce] sm:bg-transparent" />
            <span className="hidden md:inline">+91 9995900918</span>
          </Link>
          {/* Language Dropdown for desktop */}
          <div className="hidden sm:inline">
            <LanguageDropdown />
          </div>
        </div>
        {/* Mobile nav overlay */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black/90 md:hidden" onClick={() => setOpen(false)}></div>
        )}
        <nav
          className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
          aria-label="Mobile navigation"
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            x
          </button>
          <ul className="flex flex-col mt-20 space-y-6 text-xl px-8">
            <li><Link href="/" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>{t('header.home')}</Link></li>
            <li><Link href="/about" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>{t('header.about')}</Link></li>
            <li><Link href="/products" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>{t('header.products')}</Link></li>
            <li><Link href="/dealer" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>{t('header.dealer')}</Link></li>
            <li><Link href="/contact" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>{t('header.contact')}</Link></li>
            <li><Link href={"tel:+919995900918"} className="hover:text-[#3394E6] flex items-center space-x-2" onClick={() => setOpen(false)}><FaPhoneAlt /> <span>+91 9995 900 918</span></Link></li>
            <li>
              {/* Language Dropdown for mobile */}
              <LanguageDropdown />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
