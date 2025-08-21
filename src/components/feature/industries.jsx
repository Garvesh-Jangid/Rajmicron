import React, { useState } from 'react';

const IndustriesCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    {
      title: "PAINTS & COATINGS",
      description: "Our high-purity GCC enhances the performance of paints and coatings by improving opacity, brightness, and surface smoothness. It acts as a functional filler, increasing durability and reducing production costs while maintaining excellent color consistency.",
      features: [
        "IMPROVES WHITENESS AND COVERAGE",
        "ENHANCES PAINT DURABILITY AND WEATHER RESISTANCE",
        "PROVIDES SMOOTH, UNIFORM FINISH",
        "REDUCES PRODUCTION COSTS WITHOUT COMPROMISING QUALITY",
        "IMPROVES SCRUB DURABILITY OVER TIME"
      ],
      imageSrc: "/assets/industries/image 5.png",
      imageAlt: "Paint and coating applications",
      industries: [
        { name: "Paints & Coatings", active: true },
        { name: "Plastics & Polymers", active: false },
        { name: "Paper & Pulp", active: false },
        { name: "Construction Materials", active: false },
        { name: "Pharmaceuticals", active: false },
        { name: "Food Industry", active: false }
      ]
    },
    {
      title: "PLASTICS & POLYMERS",
      description: "GCC's unique role in plastics and polymers to improve mechanical properties, dimensional stability, and surface quality. Its fine particle size ensures excellent dispersion, making it ideal for various plastic manufacturing processes.",
      features: [
        "INCREASES PRODUCT STRENGTH AND RIGIDITY",
        "ENHANCES SURFACE SMOOTHNESS AND GLOSS",
        "IMPROVES HEAT RESISTANCE AND DURABILITY",
        "REDUCES SHRINKAGE DURING MOLDING",
        "ENABLES HIGH MATERIAL COSTS THROUGH OPTIMIZED FORMULATION"
      ],
      imageSrc: "/assets/industries/image 5-1.png",
      imageAlt: "Plastic and polymer manufacturing",
      industries: [
        { name: "Paints & Coatings", active: false },
        { name: "Plastics & Polymers", active: true },
        { name: "Paper & Pulp", active: false },
        { name: "Construction Materials", active: false },
        { name: "Pharmaceuticals", active: false },
        { name: "Food Industry", active: false }
      ]
    },
    {
      title: "PAPER & PULP",
      description: "In paper manufacturing, GCC is essential for boosting brightness, smoothness, and print quality. Its controlled particle size ensures consistent results, making it ideal for both coated and uncoated papers.",
      features: [
        "Improves whiteness and opacity",
        "Enhances print sharpness and color reproduction",
        "Reduces paper weight without losing strength",
        "Improves sheet smoothness and texture",
        "Lowers production costs through efficient filler use"
      ],
      imageSrc: "/assets/industries/image 5-2.png",
      imageAlt: "Paper and pulp production",
      industries: [
        { name: "Paints & Coatings", active: false },
        { name: "Plastics & Polymers", active: false },
        { name: "Paper & Pulp", active: true },
        { name: "Construction Materials", active: false },
        { name: "Pharmaceuticals", active: false },
        { name: "Food Industry", active: false }
      ]
    },
    {
      title: "CONSTRUCTION MATERIALS",
      description: "GCC is a key ingredient in construction materials like cement, plaster, and concrete, enhancing workability and long-term durability. It also improves thermal insulation and surface smoothness.",
      features: [
        "Improves bonding strength and durability",
        "Enhances workability of cement and plaster mixes",
        "Provides smoother, crack-resistant finishes",
        "Improves thermal and sound insulation properties",
        "Increases resistance to wear and weathering"
      ],
      imageSrc:"/assets/industries/image 5-3.png",
      imageAlt: "Construction materials and applications",
      industries: [
        { name: "Paints & Coatings", active: false },
        { name: "Plastics & Polymers", active: false },
        { name: "Paper & Pulp", active: false },
        { name: "Construction Materials", active: true },
        { name: "Pharmaceuticals", active: false },
        { name: "Food Industry", active: false }
      ]
    },
    {
      title: "PHARMACEUTICALS",
      description: "Our food- and pharma-grade GCC meets strict purity standards, making it safe for medicinal and supplement applications. It is commonly used as a calcium source and excipient in tablets and powders.",
      features: [
        "100% safe and high purity mineral base",
        "Serves as an effective calcium supplement",
        "Functions as an excipient for tablets and capsules",
        "Provides excellent compressibility and flow properties",
        "Meets global pharmaceutical quality regulations"
      ],
      imageSrc: "/assets/industries/image 5-4.png",
      imageAlt: "Pharmaceutical applications",
      industries: [
        { name: "Paints & Coatings", active: false },
        { name: "Plastics & Polymers", active: false },
        { name: "Paper & Pulp", active: false },
        { name: "Construction Materials", active: false },
        { name: "Pharmaceuticals", active: true },
        { name: "Food Industry", active: false }
      ]
    },
    {
      title: "FOOD INDUSTRY",
      description: "GCC is approved for use in specific food applications as a safe mineral additive. It is used to fortify calcium levels and improve texture in various products.",
      features: [
        "Safe, food-grade certified mineral",
        "Fortifies calcium content in foods and beverages",
        "Improves product texture and stability",
        "Acts as an effective anti-caking agent",
        "Complies with international food safety standards"
      ],
      imageSrc: "/assets/industries/image 5-5.png",
      imageAlt: "Food industry applications",
      industries: [
        { name: "Paints & Coatings", active: false },
        { name: "Plastics & Polymers", active: false },
        { name: "Paper & Pulp", active: false },
        { name: "Construction Materials", active: false },
        { name: "Pharmaceuticals", active: false },
        { name: "Food Industry", active: true }
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
        top: '4945px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute'
      }}
      className="flex"
    >
      {/* First Section - Orange Container with Industry Selection */}
      <div 
        style={{
          width: '483px',
          height: '664px',
          left: '320px',
          backgroundColor: '#CF8700',
          opacity: 1,
          transform: 'rotate(0deg)',
          borderTopLeftRadius: '7px',
          borderBottomLeftRadius: '7px',
          position: 'absolute'
        }}
        className="flex items-center justify-center"
      >
        {/* Industry Selection */}
        <div className="space-y-3 w-full pt-16">
          {currentData.industries.map((industry, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-200 relative"
              style={{
                width: '431px',
                height: '89px',
                backgroundColor: 'white',
                border: industry.active ? '3px solid #fcfbfaff' : '3px solid #CF8700',
                marginRight: industry.active ? '-50px' : '25px',
                borderRadius: '30px',
                padding: '12px 20px',
                boxShadow: industry.active ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
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
                className={`font-medium text-sm ${industry.active ? 'font-bold' : ''}`}
                style={{ 
                  color: industry.active ? '#CF8700' : '#000000',
                  fontSize: '16px',
                  textTransform: 'uppercase'
                }}
              >
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section - Main Content */}
      <div 
        className="cursor-pointer"
        style={{
          width: '1229px',
          height: '665px',
          left: '800px',
          backgroundColor: '#FFF7E9',
          opacity: 1,
          transform: 'rotate(0deg)',
          position: 'absolute'
        }}
        onClick={nextCard}
      >
        <div 
          style={{
            width: '573px',
            height: '570px',
            top: '-10px',
            left: '50px',
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
                    width: '500px',
                    height: '81px',
                    top: '48px',
                    left: '95px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    position: 'absolute',
                    fontFamily: 'Font 1', 
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '70px',
                    lineHeight: '63px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#CF8700'
                  }}
                >
                  INDUSTRIES WE SERVE
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
                  height: '200px',
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
          </div>
        </div>

        {/* Image Section */}
        <div 
  style={{
    width: '366px',
            height: '640px',
            top: '20px',
            left: '700px',
            transform: 'rotate(0deg)',
            opacity: 1,
            borderRadius: '8px',
            position: 'absolute',
    
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

      {/* Remaining space (fills the 1920px width) */}
      <div style={{ 
        position: 'absolute',
        left: '0px',
        width: '200px',
        height: '739px',
        backgroundColor: 'white'
      }}></div>
    </div>
  );
};

export default IndustriesCards;