"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'
import categoryDataEs from '../category-es.json'
import categoryDataEn from '../category-en.json'
import detailedModelData from './detailedModelData.json'
import modelDataEn from './modelData-en.json'
import modelDataEs from './modelData-es.json'

function ModelCard({ slug, model }) {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
      <img 
        src={model.image} 
        alt={model.name} 
        className="w-full object-contain mb-4 rounded" 
        onError={e => e.target.src='/about.webp'} 
      />
      <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">{model.code}</h3>
      {/* <p className="text-gray-600 mb-3 text-sm">
        Model: <span className="font-semibold text-[#0072ce]">{model.code}</span>
      </p> */}
      <div className="mt-auto">
        <Link 
          href={`/products/${slug}/${model.code}`} 
          className="w-full inline-block bg-[#0072ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition text-center"
        >
          {t('home.productsPage.exploreModels')}
        </Link>
      </div>
    </div>
  )
}

export default function ProductSlugPage() {
  const { slug } = useParams()
  const { t, locale } = useTranslation()
  const [productData, setProductData] = useState(null)
  const [categoryInfo, setCategoryInfo] = useState(null)
  const [isDetailedProduct, setIsDetailedProduct] = useState(false)
  const [oldProductData, setOldProductData] = useState(null)

  useEffect(() => {
    if (slug) {
      // Get category data based on language
      const categoryData = locale === 'en' ? categoryDataEn : categoryDataEs
      
      // Find the category and product info
      let foundProduct = null
      let foundCategory = null
      
      Object.entries(categoryData).forEach(([categoryKey, category]) => {
        if (category.products && category.products[slug]) {
          foundProduct = { key: slug, ...category.products[slug] }
          foundCategory = { key: categoryKey, ...category }
        }
      })
      
      setCategoryInfo(foundCategory)
      
      // Check if this product has detailed model data
      if (foundProduct && foundProduct.detail === "yes" && detailedModelData[slug]) {
        setProductData(detailedModelData[slug])
        setIsDetailedProduct(true)
        setOldProductData(null)
      } else {
        // For regular products, use the old modelData structure based on language
        const modelData = locale === 'en' ? modelDataEn : modelDataEs
        const oldProduct = modelData[slug]
        if (oldProduct) {
          // Check if the old product also has detail: "yes", then prioritize new view
          if (oldProduct.detail === "yes" && detailedModelData[slug]) {
            setProductData(detailedModelData[slug])
            setIsDetailedProduct(true)
            setOldProductData(null)
          } else {
            // Use old view for detail: "no" or missing detail field
            setOldProductData(oldProduct)
            setIsDetailedProduct(false)
            setProductData(null)
          }
        } else {
          setOldProductData(null)
          setProductData(null)
          setIsDetailedProduct(false)
        }
      }
    }
  }, [slug, locale])

  // If neither detailed nor old product data exists
  if (!productData && !oldProductData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.productsPage.productNotFound')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('home.productsPage.productNotAvailable')}
            </p>
            <Link href="/products" className="text-[#0072ce] hover:text-blue-700 font-medium">
              ← {t('home.productsPage.backToProducts')}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Render old view for detail: "no" products
  if (!isDetailedProduct && oldProductData) {
    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] pb-12 ">
          {/* Hero banner */}
          <div className="relative w-full mb-10">
            <img src="/mechnova/banner/banner-m.webp" alt="Productos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="px-8 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{oldProductData.name}</h1>
                <p className="text-lg md:text-2xl text-blue-100">{oldProductData.description}</p>
              </div>
            </div>
          </div>
          {/* Models */}
          <div className="max-w-5xl mx-auto flex flex-col gap-12 px-4">
            {oldProductData.models && oldProductData.models.length > 0 ? (
              oldProductData.models
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
                        onError={e => { e.target.src = oldProductData.error_image || '/about.webp'; }}
                      />
                    </div>
                    {/* Model info */}
                    <div className="flex-1 flex flex-col justify-center bg-gray-50 rounded-lg p-6 shadow">
                      <h3 className="text-xl font-semibold text-[#0072ce] mb-2">{model.name}</h3>
                      <p className="mb-1"><span className="font-bold">{t('home.productsPage.code')}</span> {model.code}</p>
                      <p className="mb-1"><span className="font-bold">{t('home.productsPage.warranty')}</span> {model.warranty}</p>
                      <p className="whitespace-pre-line"><span className="font-bold">{t('home.productsPage.specificationsLabel')}</span> <br/> {model.specifications}</p>
                      <span className="flex flex-col md:flex-row items-start md:items-center mt-4 gap-4">
                        <Link href="/contact">
                          <button className="p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">{t('home.productsPage.requestQuote')}</button>
                        </Link>
                        <Link href="tel:+919995900918">
                          <button className="md:ml-4 p-2 bg-[#0072ce] text-gray-100 text-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-110 transition">{t('home.productsPage.callUs')}</button>
                        </Link>
                      </span>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center text-gray-500">{t('home.productsPage.noModelsAvailable')}</div>
            )}
          </div>
          {/* Back link */}
          <div className="mt-16 flex justify-center">
            <Link href="/products" className="">
              <button className="bg-[#0072ce] text-white text-xl font-medium p-4 rounded-xl cursor-pointer hover:scale-110 transition-all">{t('home.productsPage.backToProductsButton')}</button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Render new view for detail: "yes" products
  if (isDetailedProduct && productData) {
    const productName = locale === 'en' ? (productData.nameEn || productData.name) : productData.name
    const productDescription = locale === 'en' ? (productData.descriptionEn || productData.description) : productData.description

    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen pb-12">
        <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
        {/* Hero Banner */}
        <div className="relative w-full mb-10">
          <img 
            src={productData.banner_image || productData.hero_image} 
            alt={productName} 
            className="w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {productName}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {productDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Models Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0072ce] text-center mb-2">
              {t('home.productsPage.availableModels')}
            </h2>
            <p className="text-gray-600 text-center">
              {t('home.productsPage.chooseFromSelection')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.models.map((model, index) => (
              <ModelCard key={model.code || index} slug={slug} model={model} />
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#0072ce] hover:text-blue-700 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('home.productsPage.backToProducts')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
    )
  }

  // This should never be reached, but just in case
  return null
}
