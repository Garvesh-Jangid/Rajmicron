import React, { useState } from 'react';

const ParticleSizeCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    {
      title: 'MICRON, D50 (SUPER FINE)',
      description:
        'Our precision grinding technology produces ultra-fine GCC with a micron size ranging between 2.5 to 3.5 microns (D50). Ideal for high-performance applications such as premium paints, plastics, and specialty papers, this grade offers exceptional brightness and smoothness while maintaining tight particle size control.',
      features: [
        'EXCEPTIONAL BRIGHTNESS FOR PREMIUM PRODUCTS',
        'PRECISION GRINDING TECHNOLOGY',
        'TIGHT PARTICLE SIZE CONTROL',
        'PREMIUM PAINT & PLASTIC APPLICATIONS'
      ],
      sizeRange: '2.5 – 3.5 μM',
      yieldRate: '95%+',
      batchUniformity: '95%',
      consistency: '±0.1 μM',
      imageSrc: '/assets/particles/image 6 (1).png',
      imageAlt: 'Super fine particle size visualization',
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
        'ADVANCED MICRONIZING SYSTEMS',
        'SMOOTH DISPERSION PROPERTIES',
        'PLASTIC & RUBBER INDUSTRY GRADE'
      ],
      sizeRange: '3.5 – 5.0 μM',
      yieldRate: '90%+',
      batchUniformity: '98%',
      consistency: '±0.15 μM',
      imageSrc: '/assets/particles/image 6 (3).png',
      imageAlt: 'Fine particle size visualization',
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
        'OPTIMAL PARTICLE PACKING',
        'IMPROVED MECHANICAL PROPERTIES',
        'PAPER & CONSTRUCTION APPLICATIONS'
      ],
      sizeRange: '5.0 – 10 μM',
      yieldRate: '92%+',
      batchUniformity: '97%',
      consistency: '±0.2 μM',
      imageSrc: '/assets/particles/image 6 (4).png',
      imageAlt: 'Medium fine particle size visualization',
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
        'LARGE-SCALE INDUSTRIAL APPLICATIONS',
        'ROBUST MONTHLY PRODUCTION CAPACITY',
        'ADVANCED PROCESSING TECHNOLOGY'
      ],
      sizeRange: '10 – 20 μM',
      yieldRate: '93%+',
      batchUniformity: '95%',
      consistency: '±0.1 μM',
      imageSrc: '/assets/particles/image 6 (5).png',
      imageAlt: 'Coarse particle size visualization',
      processSteps: [
        { name: 'Micron, D50 (Super Fine)', active: false },
        { name: 'Micron, D50 (Fine)', active: false },
        { name: 'Micron, D50 (Medium Fine)', active: false },
        { name: 'Micron, D50 (Coarse)', active: true }
      ]
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const currentData = cardData[currentCard];

  return (
    <section className="w-full py-8 lg:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          
          {/* Main Content Section */}
          <div className="flex-1 bg-[#FFF7E9] rounded-lg lg:rounded-r-none cursor-pointer relative shadow-sm" onClick={nextCard}>
            <div className="flex flex-col lg:flex-row min-h-[665px]">
              
              {/* Content Section */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16">
                <div className="mb-8">
                  <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#CF8700] uppercase tracking-wide leading-tight mb-4">
                    PARTICLE SIZE
                  </h1>
                  
                  <h2 className="font-teko text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-black uppercase tracking-wide leading-tight mb-6">
                    {currentData.title}
                  </h2>
                  
                  <p className="font-rubik text-base lg:text-lg text-black leading-7 max-w-[495px] mb-6">
                    {currentData.description}
                  </p>

                  {/* Size Range Badge */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#CF8700] px-4 py-2 text-white">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </span>
                      <span className="font-teko text-sm font-normal">
                        {currentData.sizeRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 max-w-[495px]">
                  {currentData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#CF8700] flex-shrink-0"></div>
                      <span className="font-rubik text-sm font-medium uppercase text-black">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mb-10 flex flex-wrap items-start gap-8 lg:gap-10">
                  <div className="text-left">
                    <div className="font-teko text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900">
                      {currentData.yieldRate}
                    </div>
                    <div className="font-teko mt-1 text-[11px] font-normal uppercase tracking-wide text-gray-600">
                      YIELD RATE
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="font-teko text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900">
                      {currentData.batchUniformity}
                    </div>
                    <div className="font-teko mt-1 text-[11px] font-normal uppercase leading-4 tracking-wide text-gray-600">
                      BATCH OF<br />UNIFORMITY
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="font-teko text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900">
                      {currentData.consistency}
                    </div>
                    <div className="font-teko mt-1 text-[11px] font-normal uppercase tracking-wide text-gray-600">
                      CONSISTENCY
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="font-teko bg-[#CF8700] text-white px-8 py-4 rounded transition-all duration-300 hover:bg-[#B8770A] hover:shadow-lg uppercase tracking-wide text-lg font-normal">
                  LEARN MORE →
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-[366px] flex items-center justify-center p-8 lg:pr-12">
                <div className="w-full max-w-[366px] h-[400px] lg:h-[640px] rounded-lg overflow-hidden">
                  <img 
                    src={currentData.imageSrc} 
                    alt={currentData.imageAlt} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Orange Container with Process Steps */}
          <aside className="w-full lg:w-[483px] bg-[#CF8700] rounded-lg lg:rounded-l-none flex items-center justify-center py-8 lg:py-16">
            <div className="space-y-3 w-full px-6 lg:px-0">
              {currentData.processSteps.map((step, index) => (
              <div
  key={index}
  className={`cursor-pointer transition-all duration-300 mx-auto lg:mx-6 flex items-center justify-center px-5 py-4
    ${step.active 
      ? 'bg-white border-3 border-white rounded-r-[30px] lg:w-[469px] shadow-md -ml-3 lg:-ml-3' 
      : 'bg-white border-3 border-[#CF8700] rounded-[30px] lg:w-[431px] hover:shadow-sm'
    }
  `}
  style={{ height: '89px' }}
  onClick={(e) => {
    e.stopPropagation();
    setCurrentCard(index);
  }}
>
  <span className={`font-teko text-lg lg:text-4xl uppercase tracking-wide text-center
    ${step.active 
      ? 'text-[#CF8700] font-medium' 
      : 'text-black font-normal'
    }
  `}>
    {step.name}
  </span>
</div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ParticleSizeCards;
