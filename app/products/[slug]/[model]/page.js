"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import { useTranslation } from '@/lib/useTranslation'
import Link from 'next/link'
import detailedModelData from '../detailedModelData.json'

export default function ModelDetailPage() {
  const { slug, model } = useParams()
  const { t, locale } = useTranslation()
  const [productData, setProductData] = useState(null)
  const [currentModel, setCurrentModel] = useState(null)

  useEffect(() => {
    if (slug && detailedModelData[slug]) {
      const product = detailedModelData[slug]
      const modelData = product.models.find(m => m.code === model)
      setProductData(product)
      setCurrentModel(modelData)
    }
  }, [slug, model])

  if (!productData || !currentModel) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-800">
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const productName = locale === 'en' ? (productData.nameEn || productData.name) : productData.name
  const modelName = locale === 'en' ? (currentModel.nameEn || currentModel.name) : currentModel.name
  const specifications = locale === 'en' ? (currentModel.specificationsEn || currentModel.specifications) : currentModel.specifications
  const features = locale === 'en' ? (currentModel.featuresEn || currentModel.features) : currentModel.features
  const applications = locale === 'en' ? (currentModel.applicationsEn || currentModel.applications) : currentModel.applications
  const warranty = locale === 'en' ? (productData.warrantyEn || productData.warranty) : productData.warranty

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Banner */}
        <div className="relative w-full mb-8">
          <img 
            src={productData.banner_image} 
            alt={productName} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-20">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {productName}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {currentModel.code}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
          {/* Product Name, Model Code and Warranty */}
          {/* <div className="bg-white rounded-xl shadow-md p-6 mb-8"> */}
            {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4"> */}
              <div className="mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                  {productName}
                </h2>
                <p className="text-2xl text-gray-600">
                  Model: <span className="font-semibold text-[#0072ce]">{currentModel.code}</span>
                </p>
              </div>
              {/* Warranty Seal */}
              {/* <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-medium">{locale === 'en' ? 'Warranty' : 'Garantía'}</div>
                  <div className="text-sm font-bold">{warranty}</div>
                </div>
              </div> */}
            {/* </div> */}
          {/* </div> */}

          {/* Model Leaflet Images */}
          {/* <div className="grid grid-cols-1 gap-6 mb-8"> */}
            <div className="flex justify-center p-4 mb-8">
              <img 
                src={currentModel.leaflet_image} 
                alt="Product Leaflet Left" 
                className="max-h-[900] w-auto rounded-lg"
                onError={e => e.target.src='/about.webp'}
              />
            </div>
            {/* <div className="bg-white rounded-xl shadow-md p-4">
              <img 
                src={productData.leaflet_images.right} 
                alt="Product Leaflet Right" 
                className="w-full h-auto rounded-lg"
                onError={e => e.target.src='/about.webp'}
              />
            </div> */}
          {/* </div> */}

          {/* Product Image and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Product Image */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <img 
                src={currentModel.image} 
                alt={modelName} 
                className="w-full h-auto object-contain rounded-lg mb-6"
                onError={e => e.target.src='/about.webp'}
              />
              
              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/contact" passHref className='bg-[#0072ce] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2'>
                    <button className="flex items-center justify-center gap-2 cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {t('home.productsPage.requestQuote')}
                    </button>
                </Link>
                <Link href="tel:+919995900918" passHref className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    <button className="flex items-center justify-center gap-2 cursor-pointer">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {t('home.productsPage.callUs')}
                    </button>
                </Link>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-6">
              {/* Specifications */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('home.productsPage.specifications')}
                </h3>
                <div className="space-y-2">
                  {specifications.split('\n').map((spec, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0072ce] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('home.productsPage.keyFeatures')}
                </h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              {/* <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('home.productsPage.applications')}
                </h3>
                <div className="space-y-3">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0072ce] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('home.productsPage.frequentlyAskedQuestions')}
            </h3>
            <div className="space-y-4">
              {productData.faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">
                      {locale === 'en' ? faq.questionEn : faq.question}
                    </span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 p-4 text-gray-700 bg-white border-l-4 border-[#0072ce]">
                    {locale === 'en' ? faq.answerEn : faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
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
