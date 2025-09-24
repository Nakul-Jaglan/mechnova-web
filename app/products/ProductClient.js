"use client"
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import categoryDataEs from './category-es.json'
import categoryDataEn from './category-en.json'
import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'

function ProductCard({ categoryKey, productKey, product }) {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4 rounded" onError={e => e.target.src='/about.webp'} />
      <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
      <Link href={`/products/${productKey}`} className="mt-auto inline-block bg-[#0072ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">{t('home.productsPage.exploreModels')}</Link>
    </div>
  )
}

export default function ProdPage() {
  const { t, locale } = useTranslation()
  
  // Conditionally load category data based on language
  const categoryData = locale === 'en' ? categoryDataEn : categoryDataEs
  
  // Convert categoryData to array and sort by id
  const categories = Object.entries(categoryData)
    .map(([key, value]) => ({ key, ...value }))
    .sort((a, b) => Number(a.id) - Number(b.id))

  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen pb-12">
        <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
        {/* Hero Banner */}
        <div className="relative w-full mb-10">
          <img src="/mechnova/banner/banner-m.webp" alt="Productos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{t('home.productsPage.title')} <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"></span></h1>
              <p className="text-lg md:text-2xl text-blue-100">{t('home.productsPage.subtitle')}</p>
            </div>
          </div>
        </div>
        {/* Categories and Products */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {categories.map(category => {
            // Convert products to array and sort by id
            const products = Object.entries(category.products || {})
              .map(([key, value]) => ({ key, ...value }))
              .sort((a, b) => Number(a.id) - Number(b.id))
            if (!products.length) return null
            return (
              <section key={category.key} id={category.key} className="mb-8">
                <div className="flex items-center justify-center mb-6 gap-4">
                  <h2 className="text-3xl md:text-5xl text-center font-semibold text-[#0072ce]">{category.name}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.key} categoryKey={category.key} productKey={product.key} product={product} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}