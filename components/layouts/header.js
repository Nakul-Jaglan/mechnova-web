"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-[#E6F2FB] text-gray-900 relative">
        <div className="flex flex-row items-center space-x-4">
          <Link href="/" >
            <Image
              src="/letter.png"
              alt="Mechnova Logo"
              width={50}
              height={50}
            />
          </Link>
          <h1 className="text-3xl">Mechnova</h1>
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
            <li><Link href="/" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-lg cursor-pointer">Home</Link></li>
            <li><Link href="/about" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-lg cursor-pointer">About Us</Link></li>
            <li><Link href="/products" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-lg cursor-pointer">Products</Link></li>
            <li><Link href="/dealer" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-lg cursor-pointer">Become Dealer</Link></li>
            <li><Link href="/contact" className="hover:border-[#3394E6] hover:bg-[#3394E6] hover:text-white p-2 rounded-lg cursor-pointer">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="text-xl flex flex-row items-center space-x-4">
          <Link href={"tel:+919667515523"} className="hover:text-[#3394E6] flex items-center space-x-2">
            <FaPhoneAlt />
            <span className="hidden md:inline">+91 96675 15523</span>
          </Link>
          <Link href="/contact">
            <button className="px-4 py-2 bg-[#3394E6] text-white rounded hover:bg-[#005FA3]">
              Book a Call
            </button>
          </Link>
        </div>
        {/* Mobile nav overlay */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden" onClick={() => setOpen(false)}></div>
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
            ×
          </button>
          <ul className="flex flex-col mt-20 space-y-6 text-xl px-8">
            <li><Link href="/" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>About Us</Link></li>
            <li><Link href="/products" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>Products</Link></li>
            <li><Link href="/dealer" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>Become Dealer</Link></li>
            <li><Link href="/contact" className="hover:text-[#3394E6]" onClick={() => setOpen(false)}>Contact Us</Link></li>
            <li><Link href={"tel:+919667515523"} className="hover:text-[#3394E6] flex items-center space-x-2" onClick={() => setOpen(false)}><FaPhoneAlt /> <span>+91 96675 15523</span></Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}><button className="w-full px-4 py-2 bg-[#3394E6] text-white rounded hover:bg-[#005FA3]">Book a Call</button></Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;