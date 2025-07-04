import Image from "next/image";

function MissionVision() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-4">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 rounded-3xl p-8 ">
          <div className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0">
            <div className="relative w-56 h-56 md:w-70 md:h-70 rounded-xl overflow-hidden border-4 border-blue-200 shadow-lg">
              <Image
                src="/mission.jpg"
                alt="Mission - Empowering Communities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0072ce] tracking-tight">Mission</h3>
            <p className="text-gray-700 text-xl leading-relaxed">
              To empower global communities with high-quality, affordable, and efficient machines that enhance productivity in agriculture, gardening, fumigation, and domestic applications—while building strong, long-term partnerships with our distribution network.
            </p>
          </div>
        </div>
        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 rounded-3xl p-8">
          <div className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0">
            <div className="relative w-56 h-56 md:w-70 md:h-70 rounded-xl overflow-hidden border-4 border-green-200 shadow-lg">
              <Image
                src="/vision.jpg"
                alt="Vision - Progress and Sustainability"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0072ce] tracking-tight">Vision</h3>
            <p className="text-gray-700 text-xl leading-relaxed">
              To revolutionize the way people work with land and machines by making powerful, easy-to-use, and reliable equipment accessible to everyone—from farmers to homeowners. We envision a world where productivity, sustainability, and progress go hand in hand, driven by innovation and trust in every Mechnova machine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;