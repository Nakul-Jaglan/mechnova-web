import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="w-full">
        <HeroSlider />
        <div className="mx-auto px-4 py-8 border-b border-gray-300 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Welcome to Mechnova</h1>
            <p className="text-center text-lg mb-6 max-w-4xl mx-auto text-gray-700">
            Mechnova is your partner in precision engineering, delivering cutting-edge solutions that drive innovation and efficiency in mechanical systems. Explore our range of products and services designed to meet the highest standards of quality and reliability.
            </p>
        </div>
    </section>
  );
}

export default Hero;