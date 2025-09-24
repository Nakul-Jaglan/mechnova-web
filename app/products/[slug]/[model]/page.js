import { notFound } from 'next/navigation'
import ModelDetailClient from './ModelDetailClient'
import detailedModelData from '../detailedModelData.json'

export async function generateMetadata({ params }) {
  const { slug, model } = params
  
  if (!detailedModelData[slug]) {
    return {
      title: 'Product not found',
      description: 'The requested product could not be found.'
    }
  }
  
  const productData = detailedModelData[slug]
  const modelData = productData.models.find(m => m.code === model)
  
  if (!modelData) {
    return {
      title: 'Model not found',
      description: 'The requested model could not be found.'
    }
  }
  
  return {
    title: modelData.metaTitle || `${modelData.name || modelData.code} - ${productData.name}`,
    description: modelData.metaDescription || `Discover the ${modelData.name || modelData.code} model specifications, features and details.`,
  }
}

export default function ModelDetailPage({ params }) {
  const { slug, model } = params
  
  // Check if product exists
  if (!detailedModelData[slug]) {
    notFound()
  }
  
  const productData = detailedModelData[slug]
  const modelData = productData.models.find(m => m.code === model)
  
  if (!modelData) {
    notFound()
  }
  
  return <ModelDetailClient slug={slug} model={model} />
}
