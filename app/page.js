import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import About from "@/components/sections/about";
import Faqs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import Industries from "@/components/sections/industries";
import Products from "@/components/sections/products";
import Segment from "@/components/sections/segment";
import Social from "@/components/sections/social";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Hero/>
        <Segment/>
        <About/>
        <Social/>
        <Industries/>
        <Products/>
        <Testimonials/>
        <Faqs/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}
