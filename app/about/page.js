import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import Image from 'next/image'
import Link from 'next/link'

function aboutPage() {
  return (
    <>
        <header>
            <Header/>
        </header>

        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="w-full bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0072ce] mb-6 leading-tight">
                    About <span className="text-gray-900">Mechnova</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Mechnova is dedicated to powering progress in agriculture, gardening, and industry with reliable, innovative, and affordable machinery. Our mission is to empower communities and businesses worldwide with equipment that enhances productivity and sustainability.
                    </p>
                    <Link href="/products">
                    <button className="px-8 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer">
                        Explore Our Products
                    </button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-80 h-54 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        alt="About Mechnova"
                        fill
                        className="object-contain bg-gray-100"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                    />
                    </div>
                </div>
                </div>
            </section>

            {/* Company Story & Values */}
            <section className="w-full py-16 bg-[#cbe7ff]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.pexels.com/photos/29479847/pexels-photo-29479847.jpeg"
                            alt="Mechnova Team"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0072ce] mb-2">Our Story</h2>
                        <p className="text-lg text-gray-700">
                        Backed by years of experience in international trade and engineering, Mechnova brings a diverse portfolio of machines to market—including brush cutters, chainsaws, sprayers, engines, generators, pumps, and more. Our products are designed to meet the evolving needs of modern users, from small gardens to large-scale agro-industrial operations.
                        </p>
                        <p className="text-lg text-gray-700">
                        We work closely with importers, wholesalers, and retailers to provide not just machines, but full-fledged business support—ensuring high-quality products, strong warranties, marketing assistance, and unmatched after-sales service.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 text-base mt-2">
                        <li>High-performance, durable, and easy-to-use equipment</li>
                        <li>Strong focus on customer satisfaction and support</li>
                        <li>Commitment to innovation and sustainability</li>
                        <li>Trusted by professionals and homeowners worldwide</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="w-full py-16 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0072ce] mb-2">Mission</h3>
                        <p className="text-xl text-gray-700">
                        To empower global communities with high-quality, affordable, and efficient machines that enhance productivity in agriculture, gardening, fumigation, and domestic applications—while building strong, long-term partnerships with our distribution network.
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0072ce] mt-8 mb-2">Vision</h3>
                        <p className="text-xl text-gray-700">
                        To revolutionize the way people work with land and machines by making powerful, easy-to-use, and reliable equipment accessible to everyone—from farmers to homeowners. We envision a world where productivity, sustainability, and progress go hand in hand, driven by innovation and trust in every Mechnova machine.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-100 h-100 rounded-full overflow-hidden shadow-lg border-4 border-blue-200">
                        <Image
                            src="/mission.jpg"
                            alt="Mission and Vision"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mechnova */}
            <section className="w-full py-16 bg-[#cbe7ff]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0072ce]">Why Choose Mechnova?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#E6F2FB] rounded-2xl shadow p-8 flex flex-col items-center text-center">
                        <Image src="https://images.pexels.com/photos/27516984/pexels-photo-27516984.png" alt="Quality" width={128} height={128} className="mb-4 rounded-full" />
                        <h4 className="font-semibold text-xl mb-2">Unmatched Quality</h4>
                        <p className="text-gray-700">Every machine is engineered for durability, performance, and ease of use—ensuring you get the best value for your investment.</p>
                        </div>
                        <div className="bg-[#E6F2FB] rounded-2xl shadow p-8 flex flex-col items-center text-center">
                        <Image src="https://images.pexels.com/photos/9385078/pexels-photo-9385078.jpeg" alt="Support" width={128} height={128} className="mb-4 rounded-full" />
                        <h4 className="font-semibold text-xl mb-2">Comprehensive Support</h4>
                        <p className="text-gray-700">From strong warranties to marketing and after-sales service, we support our partners and customers at every step.</p>
                        </div>
                        <div className="bg-[#E6F2FB] rounded-2xl shadow p-8 flex flex-col items-center text-center">
                        <Image src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg" alt="Innovation" width={128} height={128} className="mb-4 rounded-full" />
                        <h4 className="font-semibold text-xl mb-2">Driven by Innovation</h4>
                        <p className="text-gray-700">We constantly evolve our product range to meet the changing needs of agriculture, gardening, and industry worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full py-16 bg-[#0072ce]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-0">Ready to power your progress with Mechnova?</div>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-white text-[#0072ce] font-semibold rounded-full hover:scale-105 shadow transition-all text-lg border border-blue-100 cursor-pointer">
                        Contact Us Today
                        </button>
                    </Link>
                </div>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default aboutPage