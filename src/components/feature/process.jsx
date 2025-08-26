import React, { useState } from 'react';

const ProcessCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    {
      title: "SOURCING",
      description: "We begin by selecting only the purest calcite from sustainable, high-quality deposits. Each source is carefully evaluated to ensure mineral consistency, environmental responsibility, and long-term availability for our clients.",
      features: [
        "PREMIUM GRADE CALCITE SELECTION",
        "CERTIFIED HIGH-PURITY MINERAL SOURCES",
        "ENVIRONMENTALLY RESPONSIBLE MINING",
        "CONSISTENT QUALITY FROM MINE TO BATCH"
      ],
      imageSrc: "/assets/process/image 5.png",
      imageAlt: "Mining and sourcing operations",
      processSteps: [
        { name: "Sourcing", active: true },
        { name: "Processing", active: false },
        { name: "Quality Control", active: false },
        { name: "Packaging", active: false },
        { name: "Delivery", active: false }
      ]
    },
    {
      title: "PROCESSING",
      description: "Our advanced grinding and refining systems produce GCC with precise micron sizes to suit various industrial needs. This step ensures maximum brightness, controlled particle distribution, and optimum performance in the end product.",
      features: [
        "ADVANCED MICRONIZING TECHNOLOGY",
        "CUSTOMIZABLE PARTICLE SIZE RANGES",
        "CONTROLLED PARTICLE DISTRIBUTION",
        "MAXIMUM BRIGHTNESS & PURITY"
      ],
      imageSrc: "/assets/process/image 5-1.png",
      imageAlt: "Advanced processing equipment",
      processSteps: [
        { name: "Sourcing", active: false },
        { name: "Processing", active: true },
        { name: "Quality Control", active: false },
        { name: "Packaging", active: false },
        { name: "Delivery", active: false }
      ]
    },
    {
      title: "QUALITY CONTROL",
      description: "Rigorous testing protocols ensure every batch meets our exacting standards. Our state-of-the-art laboratory conducts comprehensive analysis including particle size distribution, brightness measurement, and chemical purity verification.",
      features: [
        "COMPREHENSIVE LABORATORY TESTING",
        "PARTICLE SIZE DISTRIBUTION ANALYSIS",
        "BRIGHTNESS & WHITENESS VERIFICATION",
        "CHEMICAL PURITY CERTIFICATION"
      ],
      imageSrc: "/assets/process/image 5-2.png",
      imageAlt: "Quality control laboratory",
      processSteps: [
        { name: "Sourcing", active: false },
        { name: "Processing", active: false },
        { name: "Quality Control", active: true },
        { name: "Packaging", active: false },
        { name: "Delivery", active: false }
      ]
    },
    {
      title: "PACKAGING",
      description: "Our automated packaging systems ensure product integrity and contamination-free handling. From bulk shipments to specialized containers, we maintain the highest standards of cleanliness and protection throughout the packaging process.",
      features: [
        "AUTOMATED PACKAGING SYSTEMS",
        "CONTAMINATION-FREE HANDLING",
        "FLEXIBLE PACKAGING OPTIONS",
        "MOISTURE & CONTAMINATION PROTECTION"
      ],
      imageSrc: "/assets/process/image 5-3.png",
      imageAlt: "Automated packaging facility",
      processSteps: [
        { name: "Sourcing", active: false },
        { name: "Processing", active: false },
        { name: "Quality Control", active: false },
        { name: "Packaging", active: true },
        { name: "Delivery", active: false }
      ]
    },
    {
      title: "DELIVERY",
      description: "Our logistics network ensures timely and secure delivery worldwide. With strategic partnerships and advanced tracking systems, we guarantee your GCC products arrive safely and on schedule, maintaining quality from our facility to yours.",
      features: [
        "GLOBAL LOGISTICS NETWORK",
        "REAL-TIME SHIPMENT TRACKING",
        "STRATEGIC DELIVERY PARTNERSHIPS",
        "QUALITY PRESERVATION IN TRANSIT"
      ],
      imageSrc: "/assets/process/image 5-4.png",
      imageAlt: "Global delivery and logistics",
      processSteps: [
        { name: "Sourcing", active: false },
        { name: "Processing", active: false },
        { name: "Quality Control", active: false },
        { name: "Packaging", active: false },
        { name: "Delivery", active: true }
      ]
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const currentData = cardData[currentCard];

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          
          {/* Main Content Section */}
          <div className="flex-1 bg-[#FFF7E9] rounded-lg lg:rounded-r-none cursor-pointer relative shadow-sm" onClick={nextCard}>
            <div className="flex flex-col lg:flex-row min-h-[665px]">
              
              {/* Content Section */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16">
                <div className="mb-8">
                  <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#CF8700] uppercase tracking-wide leading-tight mb-4">
                    OUR PROCESS
                  </h1>
                  
                  <h2 className="font-teko text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-black uppercase tracking-wide leading-tight mb-6">
                    {currentData.title}
                  </h2>
                  
                  <p className="font-rubik text-base lg:text-lg text-black leading-7 max-w-[495px]">
                    {currentData.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-10 max-w-[495px]">
                  {currentData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#CF8700] flex-shrink-0"></div>
                      <span className="font-rubik text-sm font-medium uppercase text-black">
                        {feature}
                      </span>
                    </div>
                  ))}
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
                  className={`cursor-pointer transition-all duration-300 mx-auto lg:mx-6 flex items-center justify-start px-5 py-4
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
                  <span className={`font-teko text-base uppercase tracking-wide
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

export default ProcessCards;