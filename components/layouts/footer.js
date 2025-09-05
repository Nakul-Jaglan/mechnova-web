import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "@/lib/useTranslation";


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#E6F2FB] text-gray-900 py-10 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between sm:items-center items-start gap-8">
        <div className="text-center md:text-left">

            <Link href="/" className="flex sm:items-center items-start space-x-2 mb-4">
                <Image src="/logo.png" alt="MechNova Logo" width={280} height={40} />
            </Link>
            {/* <h2 className="text-2xl font-bold mb-2">MechNova</h2> */}
            <p className="text-gray-800 sm:items-center items-start max-w-xs">{t('footer.tagline') || 'Empowering innovation in mechanical engineering. Join us in shaping the future.'}</p>
        </div>
        <div>
            <nav className="flex flex-col sm:flex-row gap-4 md:gap-8 text-lg">
                <Link href="/about" className="hover:text-[#005FA3] transition">{t('header.about')}</Link>
                <Link href="/products" className="hover:text-[#005FA3] transition">{t('header.products')}</Link>
                <Link href="https://blog.mechnovamachines.com" target="_blank" className="hover:text-[#005FA3] transition">{t('header.blog')}</Link>
                <Link href="/dealer" className="hover:text-[#005FA3] transition">{t('header.dealer')}</Link>
                <Link href="/contact" className="hover:text-[#005FA3] transition">{t('header.contact')}</Link>
            </nav>
            <div className="flex flex-row gap-4 mt-10 justify-center">
                <Link href="https://www.facebook.com/mechnovamachines" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
                    <FaFacebook className="w-10 h-10" />
                </Link>
                <Link href="https://www.instagram.com/mechnovamachines/" target="_blank" rel="noopener noreferrer" className=" text-[#005FA3] transition">
                    <FaInstagram className="w-10 h-10" />
                </Link>
            </div>
        </div>
        <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-2">{t('footer.contact')}</h3>
            <p className="text-gray-700">{t('footer.phone') || 'Phone'}: <Link href="tel:+919995900918" className="hover:text-[#005FA3]">+91 9995 900 918</Link></p>
            <p className="text-gray-700">{t('footer.email') || 'Email'}: <Link href="mailto:info@mechnovamachines.com" className="hover:text-[#005FA3]">info@mechnovamachines.com</Link></p>
            <p className="text-gray-700">{t('footer.address') || 'Address'}: 2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122015</p>
        </div>
      </div>
        <div className="border-t border-gray-300 mt-8 pt-4 px-4 mx-10 flex flex-col md:flex-row justify-between items-center md:px-0">
            <div className="hidden md:block"/>
            <div className="hidden md:block"/>
            <div className="text-center md:text-left text-gray-700 text-base mb-4 md:mb-0">
                <div>© {new Date().getFullYear()} MechNova. {t('footer.allRightsReserved')}</div>
            </div>
            <div className="flex flex-row gap-2 sm:gap-4 text-sm text-gray-600">
                <Link href="/privacy" className="hover:text-[#005FA3] transition">
                    {t('footer.privacy') || 'Política de Privacidad'}
                </Link>
                <Link href="/terms" className="hover:text-[#005FA3] transition">
                    {t('footer.terms') || 'Términos y Condiciones'}
                </Link>
                <Link href="/cookie" className="hover:text-[#005FA3] transition">
                    {t('footer.cookies') || 'Política de Cookies'}
                </Link>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
