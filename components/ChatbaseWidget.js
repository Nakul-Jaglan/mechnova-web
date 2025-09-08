"use client"
import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/useTranslation'

export default function ChatbaseWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    // Pre-load the iframe when component mounts for faster opening
    if (!isLoaded) {
      setIsLoaded(true)
    }
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-[#0072ce] hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer"
          aria-label={t('home.chat.openChat')}
        >
          {isOpen ? (
            // Close Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Chat Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {t('home.chat.needHelp')}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-end p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-25 md:bg-transparent" 
            onClick={toggleChat}
          ></div>
          
          {/* Chat Container */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md h-[600px] md:h-[700px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#0072ce] text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg> */}
                  <img src="/letter.png" alt="MechNova Logo" className="w-7" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('home.chat.title')}</h3>
                  <p className="text-xs opacity-90">{t('home.chat.subtitle')}</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white hover:text-black cursor-pointer rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 relative">
              {isLoaded ? (
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/089n-pE2NNB6iPlVzL-_6"
                  width="100%"
                  height="100%"
                //   frameBorder="0"
                  className="rounded-b-lg"
                  title="MechNova AI Assistant"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0072ce] mx-auto mb-4"></div>
                    <p className="text-gray-600">{t('home.chat.loading')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
