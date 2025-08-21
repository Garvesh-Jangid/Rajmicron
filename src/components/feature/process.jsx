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
    <div 
      style={{
        width: '1920px',
        height: '739px',
        top: '6298px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute'
      }}
      className="flex"
    >
      {/* First Section - Main Content */}
      <div 
        className="cursor-pointer"
        style={{
          width: '1235px',
          height: '739px',
          backgroundColor: '#FFF7E9',
          opacity: 1,
          transform: 'rotate(0deg)'
        }}
        onClick={nextCard}
      >
        <div 
          style={{
            width: '573px',
            height: '570px',
            top: '30px',
            left: '195px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute'
          }}
          className="p-6"
        >
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h1 
                  className="text-2xl font-black text-gray-800 mb-2 tracking-tight"
                  style={{
                    width: '388px',
                    height: '81px',
                    top: '48px',
                    left: '95px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    position: 'absolute',
                    fontFamily: 'Font 1', 
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '90px',
                    lineHeight: '63px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#CF8700'
                  }}
                >
                  OUR PROCESS
                </h1>
                
                <h2 
                  className="text-2xl font-black text-gray-800 mb-2 tracking-tight"
                  style={{
                    width: '432px',
                    height: '36px',
                    top: '145px',
                    left: '95px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    position: 'absolute',
                    fontFamily: 'Font 1',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '50px',
                    lineHeight: '36px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000000ff'
                  }}
                >
                  {currentData.title}
                </h2>
                
                <p 
                  className="text-2xl font-black text-gray-800 mb-2 tracking-tight"
                  style={{
                    width: '495px',
                    height: '120px',
                    top: '195px',
                    left: '95px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    position: 'absolute',
                    fontFamily: 'Font 2',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '0%',
                    verticalAlign: 'top',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    color: '#000000ff'
                  }}
                >
                  {currentData.description}
                </p>
              </div>

              {/* Features List */}
              <div 
                className="space-y-3"
                style={{
                  width: '495px',
                  height: '180px',
                  top: '330px',
                  left: '95px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  position: 'absolute'
                }}
              >
                {currentData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: '#CF8700' }}
                    ></div>
                    <span 
                      className="font-medium text-sm uppercase"
                      style={{
                        fontFamily: 'Font 2',
                        fontSize: '14px',
                        color: '#000000',
                        fontWeight: 500
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button 
                className="text-white font-bold py-3 px-6 rounded transition-colors duration-200 uppercase tracking-wide text-sm hover:opacity-90"
                style={{
                  width: '286px',
                  height: '65px',
                  top: '590px',
                  left: '95px',
                  position: 'absolute',
                  backgroundColor: '#CF8700',
                  fontFamily: 'Teko, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '22px',
                  lineHeight: '34px',
                  letterSpacing: '0%',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                LEARN MORE →
              </button>
            </div>

            {/* Image Section */}
            <div 
              style={{
                width: '366px',
    height: '640px',
    top: '51px',
    left: '612px',
    transform: 'rotate(0deg)',
    opacity: 1,
    borderRadius: '8px',
    position: 'absolute'
                
              }}
              className="flex items-center justify-center"
            >
              <img 
    src={currentData.imageSrc} 
    alt={currentData.imageAlt} 
    className="w-full h-full object-contain rounded-lg"
  />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Orange Container with Process Steps */}
      <div 
        style={{
          width: '483px',
          height: '550px',
          top: '195px',
          backgroundColor: '#CF8700',
          opacity: 1,
          transform: 'rotate(0deg)',
          borderTopRightRadius: '7px',
          borderBottomRightRadius: '7px',
        }}
        className="flex items-center justify-center"
      >
        {/* Process Steps Selection */}
        <div className="space-y-3 w-full">
          {currentData.processSteps.map((step, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-200 relative"
              style={{
                width: '431px',
                height: '89px',
                backgroundColor: 'white',
                border: step.active ? '3px solid #fcfbfaff' : '3px solid #CF8700',
                marginLeft: step.active ? '-50px' : '25px',
                borderRadius: '30px',
                padding: '12px 20px',
                boxShadow: step.active ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentCard(index);
              }}
            >
              <span 
                className={`font-medium text-sm ${step.active ? 'font-bold' : ''}`}
                style={{ 
                  color: step.active ? '#CF8700' : '#000000',
                  fontSize: '16px',
                  textTransform: 'uppercase'
                }}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Remaining space (fills the 1920px width) */}
      <div style={{ flex: 1, backgroundColor: 'white' }}></div>
    </div>
  );
};

export default ProcessCards;