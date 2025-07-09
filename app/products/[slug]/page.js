"use client";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import modelData from "../modelData.json";
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
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
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
      <main className="bg-white pb-12">
        {/* Hero banner */}
        <div className="w-full h-64 md:h-80 relative mb-8">
          <Image
            src={product.hero_image}
            alt={product.name}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{product.name}</h1>
          </div>
        </div>
        {/* Product description */}
        <div className="max-w-3xl mx-auto px-4 mb-10">
          <p className="text-lg text-gray-700 text-center">{product.description}</p>
        </div>
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
                  <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
                    <Image
                      src={model.image}
                      alt={model.name}
                      width={350}
                      height={250}
                      className="rounded-lg shadow-lg object-contain bg-white"
                    />
                  </div>
                  {/* Model info */}
                  <div className="flex-1 flex flex-col justify-center bg-gray-50 rounded-lg p-6 shadow">
                    <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                    <p className="mb-1"><span className="font-bold">Código:</span> {model.code}</p>
                    <p className="mb-1"><span className="font-bold">Garantía:</span> {model.warranty}</p>
                    <p className="whitespace-pre-line"><span className="font-bold">Especificaciones:</span> {model.specifications}</p>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center text-gray-500">No hay modelos disponibles para este producto.</div>
          )}
        </div>
        {/* Back link */}
        <div className="mt-16 flex justify-center">
          <Link href="/products" className="text-blue-600 underline text-lg font-medium">Volver a productos</Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default DetailPage;