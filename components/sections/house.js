import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/lib/useTranslation'

function House() {
  const { t } = useTranslation()
  
  const companies = [
    {
      name: "Bonhoeffer Machines",
      description: t('home.house.parentCompany'),
      url: "https://bonhoeffermachines.com",
      logo: "/logos/bonhoeffer_logo.png"
    },
    {
      name: "Stronwell",
      description: t('home.house.indianDivision'), 
      url: "https://stronwell.com",
      logo: "/logos/stronwell_logo.png"
    },
    {
      name: "Mechnova Machines",
      description: t('home.house.selfDivision'),
      url: "https://mechnovamachines.com",
      logo: "/logo.png"
    }
  ]

  const hard = [
    {
      name: "Stevron Tools", 
      description: t('home.house.hardwareDivision'),
      url: "https://stevrontools.com",
      logo: "/logos/stevron_black_logo.png"
    }
  ]

  return (
    <section className="bg-[#0072ce] text-white py-5 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('home.house.heading')}
            {/* <span className="block mt-2 text-cyan-400"> {t('home.house.subheading')}</span> */}
          </h2>
          <div className="w-24 h-1 bg-cyan-200 mx-auto rounded"></div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {companies.map((company, index) => (
            <Link href={company.url} target='_blank' rel='noopener noreferrer' key={index}>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Logo Container */}
                <div className="mb-6 flex justify-center">
                  <div className="w-full h-40 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} Logo`}
                      className="h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback to text if logo doesn't exist
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div 
                      className="text-gray-800 font-bold text-lg hidden"
                      style={{ display: 'none' }}
                    >
                      {company.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                {/* <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  {company.name}
                </h3> */}
                <p className="text-cyan-100 mb-6 font-medium text-lg">
                  {company.description}
                </p>

                {/* Visit Button */}
                <p 
                  // href={company.url}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="inline-flex text-xl items-center gap-2 bg-white text-[#0072ce] px-6 py-3 rounded-full font-semibold hover:bg-[#0072ce] hover:text-white transition-colors duration-300 group-hover:shadow-lg"
                >
                  {/* {t('home.house.visitWebsite')} */}
                  {company.name}
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center my-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('home.house.hardHeading')}
          </h2>
          <div className="w-24 h-1 bg-cyan-200 mx-auto rounded"></div>
        </div>

        <div className="flex justify-center items-center md:w-[50%] lg:w-[30%] mx-auto">
          {hard.map((company, index) => (
            <Link href={company.url} target='_blank' rel='noopener noreferrer' key={index}>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                {/* Logo Container */}
                <div className="mb-6 flex justify-center">
                  <div className="w-full h-40 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} Logo`}
                      className="h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback to text if logo doesn't exist
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div 
                      className="text-gray-800 font-bold text-lg hidden"
                      style={{ display: 'none' }}
                    >
                      {company.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                {/* <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  {company.name}
                </h3> */}
                <p className="text-cyan-100 mb-6 font-medium text-lg">
                  {company.description}
                </p>

                {/* Visit Button */}
                <p 
                  // href={company.url}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="inline-flex text-xl items-center gap-2 bg-white text-[#0072ce] px-6 py-3 rounded-full font-semibold hover:bg-[#0072ce] hover:text-white transition-colors duration-300 group-hover:shadow-lg"
                >
                  {/* {t('home.house.visitWebsite')} */}
                  {company.name}
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Tagline */}
        {/* <div className="text-center mt-16">
          <p className="text-lg md:text-xl text-cyan-100 max-w-5xl mx-auto leading-relaxed">
            {t('home.house.tagline')}
          </p>
        </div> */}

      </div>
    </section>
  )
}

export default House
