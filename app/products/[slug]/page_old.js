"use client";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import modelData from "./modelData.json";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function DetailPage() {
  const { slug } = useParams();
  const product = modelData[slug];

  if (!product) {
    return (
      <>
        <header>
          <Header />
        </header>
        <main className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Producto no encontrado</h2>
          <Link href="/products" className="text-blue-600 underline">Volver a productos</Link>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-12">
        {/* Hero banner */}
        <div className="relative w-full mb-10">
          <img src="/mechnova/banner/banner-m.webp" alt="Productos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-lg md:text-2xl text-blue-100">{product.description}</p>
            </div>
          </div>
        </div>
        {/* <div className="w-full mb-8">
          <img
            src="/mechnova/banner/banner-m.webp"
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex justify-center p-2">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0072ce] drop-shadow-lg">{product.name}</h1>
        </div> */}
        {/* Product description */}
        {/* <div className="max-w-3xl mx-auto px-4 mb-10">
          <p className="text-xl text-gray-700 text-center">{product.description}</p>
        </div> */}
        {/* Models */}
        <div className="max-w-5xl mx-auto flex flex-col gap-12 px-4">
          {product.models && product.models.length > 0 ? (
            product.models
              .sort((a, b) => Number(a.id) - Number(b.id))
              .map((model, idx) => (
                <div
                  key={model.code}
                  className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Model image */}
                  <div className="flex-shrink-0 w-full h-full md:w-2/5 flex justify-center items-center">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="rounded-lg shadow-lg bg-white"
                      onError={e => { e.target.src = product.error_image || '/about.webp'; }}
                    />
                  </div>
                  {/* Model info */}
                  <div className="flex-1 flex flex-col justify-center bg-gray-50 rounded-lg p-6 shadow">
                    <h3 className="text-xl font-semibold text-[#0072ce] mb-2">{model.name}</h3>
                    <p className="mb-1"><span className="font-bold">Código:</span> {model.code}</p>
                    <p className="mb-1"><span className="font-bold">Garantía:</span> {model.warranty}</p>
                    <p className="whitespace-pre-line"><span className="font-bold">Especificaciones:</span> <br/> {model.specifications}</p>
                    <span className="flex flex-col md:flex-row items-start md:items-center mt-4 gap-4">
                      <Link href="/contact">
                        <button className="p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">Solicitar Presupuesto</button>
                      </Link>
                      <Link href="tel:+919667515523">
                        <button className="md:ml-4 p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">Llámanos</button>
                      </Link>
                    </span>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center text-gray-500">No hay modelos disponibles para este producto.</div>
          )}
        </div>
        {/* Back link */}
        <div className="mt-16 flex justify-center">
          <Link href="/products" className="">
            <button className="bg-[#0072ce] text-white text-xl font-medium p-4 rounded-xl cursor-pointer hover:scale-110 transition-all">Volver a productos</button>
          </Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default DetailPage;