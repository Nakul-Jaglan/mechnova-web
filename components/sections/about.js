import Image from "next/image";

function About() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h2>
          <p className="text-gray-700 text-lg mb-4">
            At <span className="font-semibold text-blue-700">Mechnova</span>, we are passionate about powering progress in agriculture, gardening, and industry through reliable, innovative, and affordable machinery. Backed by years of experience in international trade and engineering excellence, we bring to market a diverse portfolio of machines including brush cutters, chainsaws, sprayers, engines, generators, pumps, and more—designed to meet the evolving needs of modern users.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We work closely with importers, wholesalers, and retailers to provide not just machines, but full-fledged business support—ensuring high-quality products, strong warranties, marketing assistance, and unmatched after-sales service. Whether it’s a small garden or a large-scale agro-industrial operation, Mechnova is your trusted partner for performance and reliability.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-100 h-100 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about.png"
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
  );
}

export default About;