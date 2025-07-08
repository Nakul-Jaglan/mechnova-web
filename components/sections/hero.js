import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="w-full">
        <HeroSlider />
        <div className="mx-auto px-4 py-8 border-b border-gray-300 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Welcome to Mechnova</h1>
            <p className="text-center text-lg mb-6 max-w-4xl mx-auto text-gray-700">
Mechnova delivers practical outdoor equipment made for homeowners, small farms, and retail buyers who want tools that work — without paying for extras they’ll never need.            </p>
        </div>
    </section>
  );
}

export default Hero;
