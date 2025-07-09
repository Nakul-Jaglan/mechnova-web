"use client"
import { useState, useRef, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// Import JSON data
import categoriesData from '../app/products-old/categories.json'
import chainsawData from '../app/products-old/chainsaw.json'
import brushcutterData from '../app/products-old/brushcutter.json'
import blowerData from '../app/products-old/blower.json'
import sprayerData from '../app/products-old/sprayer.json'
import lawnMowerData from '../app/products-old/lawn-mower.json'
import dieselEngineData from '../app/products-old/diesel-engine.json'

const ProductCard = ({ model, productId }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-4">
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={model.image} 
          alt={model.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = '/about.webp'
          }}
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {model.warranty}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{model.name}</h3>
        <p className="text-blue-600 font-semibold mb-3">{model.code}</p>
        
        <div className="space-y-2 mb-4">
          {model.specifications.split('\n').slice(0, 3).map((spec, index) => (
            spec.trim() && (
              <p key={index} className="text-sm text-gray-600">
                {spec.trim()}
              </p>
            )
          ))}
        </div>
        
        <Link 
          href={`/products-old/${productId}?model=${model.code}`}
          className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  )
}

const InfiniteSlider = ({ models, productId, categoryName }) => {
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Create infinite scroll effect by duplicating models
  const infiniteModels = [...models, ...models, ...models]

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      // Set initial scroll position to middle to enable infinite scroll
      slider.scrollLeft = slider.scrollWidth / 3
    }
  }, [])

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full mr-4"></span>
          {categoryName}
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={slideLeft}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          <button 
            onClick={slideRight}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {infiniteModels.map((model, index) => (
          <ProductCard key={`${model.code}-${index}`} model={model} productId={productId} />
        ))}
      </div>
    </div>
  )
}

const Sidebar = ({ categories, activeCategory, setActiveCategory, hoveredCategory, setHoveredCategory }) => {
  // Sample products for demonstration - in real app, you'd fetch this data
  const productsByCategory = {
    'gardening-forestry': ['Chainsaw', 'Brushcutter', 'Hedge Trimmer', 'Pole Pruner'],
    'fumigation': ['Sprayer', 'Blower', 'Vacuum Blower'],
    'diesel-machines': ['Diesel Engine', 'Diesel Water Pump', 'Diesel Generator'],
    'domestic': ['Lawn Mower', 'Pressure Washer', 'Electric Motor'],
    'agro-industrial': ['Gasoline Engine', 'Water Pump', 'Generator']
  }

  const categoryIcons = {
    'gardening-forestry': '🌿',
    'fumigation': '💨',
    'diesel-machines': '⚙️',
    'domestic': '🏠',
    'agro-industrial': '🏭'
  }

  return (
    <div className="h-full bg-white shadow-2xl border-r border-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <span className="text-2xl text-white font-bold">M</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Categorías
          </h2>
          <p className="text-gray-500 text-sm">Explora nuestros productos</p>
        </div>
        
        {/* Categories */}
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-500 transform ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl scale-105 -translate-y-1' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-lg hover:scale-102'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-2xl transition-transform duration-300 ${
                    activeCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {categoryIcons[category.id]}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-base leading-tight block">
                      {category.name_es}
                    </span>
                    <span className={`text-xs opacity-80 ${
                      activeCategory === category.id ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {productsByCategory[category.id]?.length || 0} productos
                    </span>
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-white' 
                      : 'bg-blue-400 opacity-0 group-hover:opacity-100'
                  }`}></div>
                </div>
              </button>
              
              {/* Expanded products list on hover */}
              {hoveredCategory === category.id && (
                <div className="absolute left-full top-0 ml-4 bg-white text-gray-800 rounded-2xl shadow-2xl p-6 min-w-72 z-5000 border border-gray-100 animate-slide-in">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{categoryIcons[category.id]}</div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{category.name_es}</h3>
                      <p className="text-gray-500 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {productsByCategory[category.id]?.map((product, index) => (
                      <Link
                        key={index}
                        href={`/products-old/${product.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full transition-transform duration-200 group-hover:scale-150"></div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 font-medium">
                          {product}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Contact Section */}
        <div className="mt-12 p-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-8 -mb-8"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-lg">¿Necesitas ayuda?</p>
                <p className="text-sm text-green-100">Estamos aquí para ti</p>
              </div>
            </div>
            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Contactar Ahora
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-xs text-blue-500 font-medium">Productos</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-xs text-purple-500 font-medium">Categorías</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState('gardening-forestry')
  const [hoveredCategory, setHoveredCategory] = useState(null)
  
  const categories = categoriesData.categories
  
  // Map products data
  const allProducts = {
    'gardening-forestry': [
      { ...chainsawData.chainsaw, models: chainsawData.chainsaw.models },
      { ...brushcutterData.brushcutter, models: brushcutterData.brushcutter.models }
    ],
    'fumigation': [
      { ...blowerData.blower, models: blowerData.blower.models },
      { ...sprayerData.sprayer, models: sprayerData.sprayer.models }
    ],
    'diesel-machines': [
      { ...dieselEngineData['diesel-engine'], models: dieselEngineData['diesel-engine'].models }
    ],
    'domestic': [
      { ...lawnMowerData['lawn-mower'], models: lawnMowerData['lawn-mower'].models }
    ],
    'agro-industrial': []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/mechnova/banner/website-banner1.webp" 
          alt="Products Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Productos</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Descubre nuestra amplia gama de equipos profesionales para todas tus necesidades
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Split Layout: Sidebar (40%) + Content (60%) */}
      <div className="flex min-h-screen">
        {/* Fixed Sidebar - 20% width */}
        <div className="w-1/5 relative z-900">
          <div className="sticky top-0 h-screen overflow-y-auto z-900">
            <Sidebar 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          </div>
        </div>
        
        {/* Main Content - 80% width */}
        <div className="w-4/5 p-8 bg-white">
          <div className="max-w-full">
            {allProducts[activeCategory]?.map((product) => (
              <div key={product.id} className="mb-16">
                <InfiniteSlider 
                  models={product.models} 
                  productId={product.id}
                  categoryName={product.name_es}
                />
              </div>
            ))}
            
            {(!allProducts[activeCategory] || allProducts[activeCategory].length === 0) && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Próximamente</h3>
                <p className="text-gray-500">Los productos de esta categoría estarán disponibles pronto</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
