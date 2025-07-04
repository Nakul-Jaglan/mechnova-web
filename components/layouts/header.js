import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <>
        <div className="flex items-center justify-between p-4 bg-[#E6F2FB] text-gray-900">
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
            <nav>
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
                <button className="px-4 py-2 bg-[#3394E6] text-white rounded hover:bg-[#005FA3]">
                    <Link href="/contact">Book a Call</Link>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header