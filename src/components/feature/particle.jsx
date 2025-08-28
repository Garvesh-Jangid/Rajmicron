import React, { useState, useEffect } from 'react';
import './ParticleSizeCards.css';

const ParticleSizeCards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardData = [
    {
      title: 'MICRON, D50 (SUPER FINE)',
      description:
        'Our precision grinding technology produces ultra-fine GCC with a micron size ranging between 2.5 to 3.5 microns (D50). Ideal for high-performance applications such as premium paints, plastics, and specialty papers, this grade offers exceptional brightness and smoothness while maintaining tight particle size control.',
      features: [
        'EXCEPTIONAL BRIGHTNESS FOR PREMIUM PRODUCTS',
       
      ],
      sizeRange: '2.5 – 3.5 μM',
      yieldRate: '95%+',
      batchUniformity: '95%',
      consistency: '±0.1 μM',
      imageSrc: '/assets/particles/image 6 (1).png',
      imageAlt: 'Super fine particle size visualization',
      iconSrc: '/assets/vectors/arrow.png',
      processSteps: [
        { name: 'Micron, D50 (Super Fine)', active: true },
        { name: 'Micron, D50 (Fine)', active: false },
        { name: 'Micron, D50 (Medium Fine)', active: false },
        { name: 'Micron, D50 (Coarse)', active: false }
      ]
    },
    {
      title: 'MICRON, D50 (FINE)',
      description:
        'Produced with advanced micronizing systems, this grade has a particle size of 3.5 to 5.0 microns (D50), offering excellent opacity and smooth dispersion. Suitable for plastics, rubber, and coating industries, it ensures high purity and controlled particle size distribution for consistent performance.',
      features: [
        'SUPERIOR OPACITY FOR QUALITY APPLICATIONS',
      
      ],
      sizeRange: '3.5 – 5.0 μM',
      yieldRate: '90%+',
      batchUniformity: '98%',
      consistency: '±0.15 μM',
      imageSrc: '/assets/particles/image 6 (3).png',
      imageAlt: 'Fine particle size visualization',
      iconSrc: '/assets/vectors/arrow.png',
      processSteps: [
        { name: 'Micron, D50 (Super Fine)', active: false },
        { name: 'Micron, D50 (Fine)', active: true },
        { name: 'Micron, D50 (Medium Fine)', active: false },
        { name: 'Micron, D50 (Coarse)', active: false }
      ]
    },
    {
      title: 'MICRON, D50 (MEDIUM FINE)',
      description:
        'This grade offers a balanced micron size range of 5.0 to 10 microns (D50), making it versatile for applications in paper manufacturing, adhesives, and construction materials. It provides reliable performance with optimal particle packing and improved mechanical properties.',
      features: [
        'BALANCED PROPERTIES FOR VERSATILE USE',
      
      ],
      sizeRange: '5.0 – 10 μM',
      yieldRate: '92%+',
      batchUniformity: '97%',
      consistency: '±0.2 μM',
      imageSrc: '/assets/particles/image 6 (4).png',
      imageAlt: 'Medium fine particle size visualization',
      iconSrc: '/assets/vectors/arrow.png',
      processSteps: [
        { name: 'Micron, D50 (Super Fine)', active: false },
        { name: 'Micron, D50 (Fine)', active: false },
        { name: 'Micron, D50 (Medium Fine)', active: true },
        { name: 'Micron, D50 (Coarse)', active: false }
      ]
    },
    {
      title: 'MICRON, D50 (COARSE)',
      description:
        'Our advanced processing ensures production of super-fine coarse-grade GCC with a size of 10 to 20 microns (D50). Designed for large-scale industrial needs, this grade maintains the highest quality standards while meeting robust monthly production capacities.',
      features: [
        'MAINTAINING THE HIGHEST STANDARDS OF QUALITY',
      ],
      sizeRange: '10 – 20 μM',
      yieldRate: '93%+',
      batchUniformity: '95%',
      consistency: '±0.1 μM',
      imageSrc: '/assets/particles/image 6 (5).png',
      imageAlt: 'Coarse particle size visualization',
      iconSrc: '/assets/vectors/arrow.png',
      processSteps: [
        { name: 'Micron, D50 (Super Fine)', active: false },
        { name: 'Micron, D50 (Fine)', active: false },
        { name: 'Micron, D50 (Medium Fine)', active: false },
        { name: 'Micron, D50 (Coarse)', active: true }
      ]
    }
  ];

  const nextCard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % cardData.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handleCardChange = (index) => {
    if (index !== currentCard) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCard(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const currentData = cardData[currentCard];

  // Auto-advance cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentCard]);

  return (
    <section className="w-full py-8 lg:py-12 xl:py-6">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 overflow-hidden rounded-lg">
          
          {/* Main Content Section */}
          <div className="flex-1 bg-[#FFF7E9] rounded-lg lg:rounded-r-none cursor-pointer relative shadow-sm lg:h-[720px] transform transition-all duration-500 hover:shadow-lg hover:scale-[1.005]" onClick={nextCard}>
            <div className="flex flex-col lg:flex-row min-h-[455px]">
              
              {/* Content Section */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16">
                <div className="mb-8">
                  {/* Main Title with slide-in animation */}
                  <h1 className={`font-teko text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#CF8700] uppercase tracking-wide leading-tight mb-4 transform transition-all duration-700 ${
                    isTransitioning ? 'translate-x-[-100px] opacity-0' : 'translate-x-0 opacity-100'
                  }`}>
                    PARTICLE SIZE
                  </h1>
                  
                  {/* Card Title with slide-in animation */}
                  <h2 className={`font-teko text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-black uppercase tracking-wide leading-tight mb-6 transform transition-all duration-700 delay-100 ${
                    isTransitioning ? 'translate-x-[-100px] opacity-0' : 'translate-x-0 opacity-100'
                  }`}>
                    {currentData.title}
                  </h2>
                  
                  {/* Description with fade-in animation */}
                  <p className={`font-rubik text-base lg:text-lg text-black leading-7 max-w-[495px] mb-6 transform transition-all duration-700 delay-200 ${
                    isTransitioning ? 'translate-y-[20px] opacity-0' : 'translate-y-0 opacity-100'
                  }`}>
                    {currentData.description}
                  </p>

                  {/* Size Range Badge with animated features */}
                  <div className={`mb-6 flex flex-wrap items-center gap-8 transform transition-all duration-700 delay-300 ${
                    isTransitioning ? 'translate-y-[20px] opacity-0' : 'translate-y-0 opacity-100'
                  }`}>
                    {/* Size Range with bounce animation */}
                    <div className="inline-flex items-center gap-3 animate-bounce-subtle">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#CF8700] transform transition-all duration-300 hover:scale-110">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="white" 
                          className="w-4 h-4 transition-transform duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="font-teko text-base font-medium text-black">
                        {currentData.sizeRange}
                      </span>
                    </div>

                    {/* Features with staggered animation */}
                    {currentData.features.map((feature, index) => (
                      <div key={index} className={`inline-flex items-center gap-3 transform transition-all duration-500 ${
                        isTransitioning ? 'translate-y-[20px] opacity-0' : 'translate-y-0 opacity-100'
                      }`} style={{ transitionDelay: `${(index + 4) * 100}ms` }}>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#CF8700] transform transition-all duration-300 hover:scale-110">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="white" 
                            className="w-4 h-4"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <span className="font-teko text-base font-medium text-black">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats with counter animation effect */}
                <div className={`mb-10 flex flex-wrap items-start gap-8 lg:gap-10 transform transition-all duration-700 delay-400 ${
                  isTransitioning ? 'translate-y-[30px] opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  <div className="text-left group">
                    <div className="font-teko text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 transform transition-all duration-300 group-hover:scale-105 group-hover:text-[#CF8700]">
                      {currentData.yieldRate}
                    </div>
                    <div className="font-teko mt-1 text-[11px] font-normal uppercase tracking-wide text-gray-600">
                      YIELD RATE
                    </div>
                  </div>

                  <div className="text-left group">
                    <div className="font-teko text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 transform transition-all duration-300 group-hover:scale-105 group-hover:text-[#CF8700]">
                      {currentData.batchUniformity}
                    </div>
                    <div className="font-teko mt-1 text-[11px] font-normal uppercase leading-4 tracking-wide text-gray-600">
                      BATCH OF<br />UNIFORMITY
                    </div>
                  </div>

                  <div className="text-left group">
                    <div className="font-teko text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 transform transition-all duration-300 group-hover:scale-105 group-hover:text-[#CF8700]">
                      {currentData.consistency}
                    </div>
                    <div className="font-teko mt-1 text-[11px] font-normal uppercase tracking-wide text-gray-600">
                      CONSISTENCY
                    </div>
                  </div>
                </div>

                {/* Learn More Button with pulse animation */}
                <button className="font-teko bg-[#CF8700] text-white px-8 py-4 rounded transition-all duration-300 hover:bg-[#B8770A] hover:shadow-lg hover:scale-102 hover:shadow-[#CF8700]/50 uppercase tracking-wide text-lg font-normal transform animate-pulse-subtle">
                  LEARN MORE →
                </button>
              </div>

              {/* Image Section with zoom animation */}
              <div className="w-full lg:w-[366px] flex items-center justify-center p-8 lg:pr-12">
                <div className={`w-full max-w-[400px] h-[550px] lg:h-[680px] rounded-lg overflow-hidden transform transition-all duration-700 hover:scale-102 ${
                  isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                }`}>
                  <img 
                    src={currentData.imageSrc} 
                    alt={currentData.imageAlt} 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Orange Container with Process Steps */}
      {/* Right Side - Orange Container with Process Steps */}
<div className="relative">
  <aside className="w-full lg:w-[483px] bg-[#CF8700] rounded-lg lg:rounded-l-none flex py-4 lg:py-6 lg:h-[480px] transform transition-all duration-500 hover:shadow-xl">
    <div className="space-y-3 w-full px-6 lg:px-0">
      {currentData.processSteps.map((step, index) => (
        <div
          key={index}
          className={`cursor-pointer transition-all duration-500 mx-auto lg:mx-6 flex items-center px-10 py-3 transform hover:scale-[1.01]
            ${step.active 
              ? 'bg-white border-3 border-white rounded-r-[30px] lg:w-[469px] -ml-3 lg:-ml-3 shadow-lg animate-slide-in' 
              : 'bg-white border-3 border-[#CF8700] rounded-[30px] lg:w-[431px] hover:shadow-sm hover:bg-gray-50'
            }
          `}
          style={{ 
            height: '75px',
            animationDelay: `${index * 100}ms`
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleCardChange(index);
          }}
        >
          {step.active && (
            <div className="flex-shrink-0 mr-8">
              <img 
                src={cardData[index].iconSrc} 
                alt={`${step.name} icon`}
                className="w-8 h-8 object-contain transform transition-all duration-500"
              />
            </div>
          )}
          <span className={`font-teko text-lg lg:text-3xl uppercase tracking-wide flex-1 transition-all duration-300
            ${step.active 
              ? 'text-[#CF8700] font-medium' 
              : 'text-black font-normal hover:text-[#CF8700]'
            }
          `}>
            {step.name}
          </span>
        </div>
      ))}
    </div>
  </aside>

  {/* Chin decoration BELOW the orange container */}
  <div className="bottom-0 left-0 ">
    <img 
      src="/assets/vectors/chin.png" 
      alt="Chin decoration"
      className="w-12 h object-contain"
    />
  </div>
</div>


        </div>
      </div>


    </section>
  );
};

export default ParticleSizeCards;