'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "@/lib/useTranslation"

// FloatingArrow component for horizontal arrows
const FloatingArrow = ({ direction, className = "", sizeClass = "w-20 h-2" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, x: direction === 'right' ? -20 : 20 }}
      animate={{ 
        opacity: [0.5, 1, 0.5],
        x: direction === 'right' ? [0, 10, 0] : [0, -10, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        width="40" height="8"
        className={`min-w-0 max-w-[32px] max-h-[8px] sm:max-w-[48px] sm:max-h-[10px] md:max-w-[64px] md:max-h-[12px] lg:max-w-[80px] lg:max-h-[16px] ${sizeClass}`}
        viewBox="0 0 80 8" fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={direction === 'right' 
            ? "M0 4L6 0.5V2.5H79V5.5H6V7.5L0 4Z"
            : "M80 4L74 7.5V5.5H1V2.5H74V0.5L80 4Z"
          }
          fill="#ffffff"
        />
      </svg>
    </motion.div>
  )
}

// SocialSlider component for Instagram carousel
const SocialSlider = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [postsPerView, setPostsPerView] = useState(3)
  const intervalRef = useRef(null)
  const sliderRef = useRef(null)

  // Responsive postsPerView
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) setPostsPerView(1); // mobile
      else if (width < 900) setPostsPerView(2); // small tablet
      else setPostsPerView(3); // desktop
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, posts.length - postsPerView)

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying && posts.length > postsPerView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
      }, 2000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying, maxIndex, posts.length, postsPerView])

  useEffect(() => {
    // Reset currentIndex if postsPerView changes and currentIndex is out of range
    if (currentIndex > maxIndex) setCurrentIndex(0);
  }, [postsPerView, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  // Auto-play muted videos for Instagram reels and process embeds
  useEffect(() => {
    // Process Instagram embeds when slider changes
    const processInstagramEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }

    // Handle regular videos
    const videos = sliderRef.current?.querySelectorAll('video')
    videos?.forEach(video => {
      video.muted = true
      video.autoplay = true
      video.loop = true
      video.play().catch(e => console.log('Video autoplay prevented:', e))
    })

    // Process Instagram embeds after a delay
    const timer = setTimeout(processInstagramEmbeds, 300)
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Slider Container */}
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          animate={{ x: `-${currentIndex * (100 / postsPerView)}%` }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / postsPerView}%` }}
            >
              <div className="bg-black rounded-xl shadow-lg overflow-hidden h-full relative group cursor-pointer">
                {post.link ? (
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {post.type === 'video' ? (
                      <video 
                        className="w-full h-96 object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src={post.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img 
                        src={post.src} 
                        alt={post.alt}
                        className="w-full h-96 object-cover"
                      />
                    )}
                    
                    {/* Instagram overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <p className="text-sm font-medium">View on Instagram</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="h-full relative">
                    {post.type === 'video' ? (
                      <video 
                        className="w-full h-96 object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src={post.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img 
                        src={post.src} 
                        alt={post.alt}
                        className="w-full h-96 object-cover"
                      />
                    )}
                    
                    {/* No link overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-white text-center">
                        <p className="text-sm bg-black/50 px-3 py-1 rounded">Add Instagram link here</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress Indicators */}
      {posts.length > postsPerView && (
        <div className="flex flex-col items-center mt-6 space-y-3">
          {/* Progress bar only when arrows are at sides (desktop) */}
          {postsPerView === 3 && (
            <div className="flex justify-center space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 8000)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-[#000000]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
          {/* Bottom center arrows for < 3 postsPerView */}
          {postsPerView < 3 && (
            <div className="flex justify-center space-x-6 mt-2">
              <button
                onClick={prevSlide}
                className="bg-gray-100 hover:bg-gray-300 text-black p-3 rounded-full transition-colors duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-gray-300 text-black p-3 rounded-full transition-colors duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Side arrows for desktop (postsPerView === 3) */}
      {posts.length > postsPerView && postsPerView === 3 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-[-45px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-300 text-black p-3 rounded-full transition-colors duration-300 shadow-lg hidden md:block cursor-pointer"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-300 text-black p-3 rounded-full transition-colors duration-300 shadow-lg hidden md:block cursor-pointer"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

function Social() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.instagram.com/embed.js'
    script.crossOrigin = 'anonymous'
    
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      document.body.appendChild(script)
    }

    // Process Instagram embeds after script loads
    script.onload = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }

    // Also try to process embeds after a short delay
    setTimeout(() => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }, 2000)

    return () => {
      // Clean up script if component unmounts
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  // Re-process Instagram embeds when currentIndex changes (for carousel)
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }

    // Delay processing to ensure DOM is updated
    const timer = setTimeout(processEmbeds, 500)
    return () => clearTimeout(timer)
  }, [isVisible])

  // Instagram posts using local files with clickable links
  const instagramPosts = [
    // POST 1 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image1.jpg',
      link: 'https://www.instagram.com/p/DCGWdZ6h8Ep/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 1'
    },

    // POST 2 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image2.jpg',
      link: 'https://www.instagram.com/p/DC6k8BWBZE3/?img_index=1', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 2'
    },

    // POST 3 - Video  
    {
      type: 'video',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/reel1.mp4',
      link: 'https://www.instagram.com/p/DC4ABhAph-Q/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Reel 1'
    },

    // POST 4 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image3.jpg',
      link: 'https://www.instagram.com/p/DC6k8BWBZE3/?img_index=2', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 3'
    },

    // POST 5 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image4.jpg',
      link: 'https://www.instagram.com/p/DC6k8BWBZE3/?img_index=3', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 4'
    },

    // POST 6 - Video
    {
      type: 'video',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/reel2.mp4',
      link: 'https://www.instagram.com/p/DCjX3mtyPiZ/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Reel 2'
    },

    // POST 7 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image5.jpg',
      link: 'https://www.instagram.com/p/DCYd1gzBDsQ/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 5'
    },

    // POST 8 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image6.jpg',
      link: 'https://www.instagram.com/p/DCrKdKhhzGX/?img_index=1', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 6'
    },

    // POST 9 - Video
    {
      type: 'video',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/reel3.mp4',
      link: 'https://www.instagram.com/p/DCYeoPYM9HG/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Reel 3'
    },

    // POST 10 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image7.jpg',
      link: 'https://www.instagram.com/p/DCrKdKhhzGX/?img_index=2', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 7'
    },

    // POST 11 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image8.jpg',
      link: 'https://www.instagram.com/p/DCrKdKhhzGX/?img_index=3', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 8'
    },

    // POST 12 - Video
    {
      type: 'video',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/reel4.mp4',
      link: 'https://www.instagram.com/p/DJQw3ddM4no/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Reel 4'
    },

    // POST 13 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image9.jpg',
      link: 'https://www.instagram.com/p/DC0zD0Lh0zE/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 9'
    },

    // POST 14 - Image
    {
      type: 'image',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/image10.jpg',
      link: 'https://www.instagram.com/p/DDb2XGJBOWk/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Post 10'
    },

    // POST 15 - Video
    {
      type: 'video',
      src: 'https://raw.githubusercontent.com/scm-intern7/bm-web-assets/refs/heads/main/reel5.mp4',
      link: 'https://www.instagram.com/p/DHsVKvMCqjg/', // PASTE INSTAGRAM POST LINK HERE
      alt: 'Instagram Reel 5'
    }
  ]

  return (
    <section ref={sectionRef} className="py-8 bg-[#0072ce] text-gray-100">
      <div className="container mx-auto px-4 ">
        {/* Header Section with Floating Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-16"
        >
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            {/* <div className="absolute left-0 -translate-x-full items-center sm:flex hidden" style={{ marginRight: '10px', maxWidth: 'calc(100vw/8)' }}>
              <FloatingArrow 
                direction="left" 
                className="static"
                sizeClass="w-8 h-2 sm:w-12 sm:h-2 md:w-16 md:h-2 lg:w-20 lg:h-2"
              />
            </div> */}
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center text-white px-6"
            >
              {t('home.social.title')}
            </motion.h2>
            {/* Right Arrow */}
            {/* <div className="absolute right-0 translate-x-full items-center sm:flex hidden" style={{ marginLeft: '10px', maxWidth: 'calc(100vw/8)' }}>
              <FloatingArrow 
                direction="right" 
                className="static"
                sizeClass="w-8 h-2 sm:w-12 sm:h-2 md:w-16 md:h-2 lg:w-20 lg:h-2"
              />
            </div> */}
          </div>
        </motion.div>

        {/* Social Media Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="social-media-embed"
        >
          <SocialSlider posts={instagramPosts} />
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('home.social.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Social;