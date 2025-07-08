import Image from "next/image";

function About() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why <span className="font-semibold text-blue-700">Mechnova ?</span></h2>
         
          <p className="text-gray-700 text-lg mb-4">
           Because not everyone needs premium machines.
          </p>
     <p className="text-gray-700 text-lg mb-4">
          Some just need the job done — with a product that starts on time, runs smoothly, and doesn’t break the bank.
          </p>
     <p className="text-gray-700 text-lg mb-4">
         Mechnova focuses on entry-level reliability: engines that start clean, trimmers that don’t stall, pumps that do the job — all at lower cost than overbuilt brands.
          </p>
     <p className="text-gray-700 text-lg mb-4">
        No frills. Just real function, at the right price.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-100 h-100 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about.webp"
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
