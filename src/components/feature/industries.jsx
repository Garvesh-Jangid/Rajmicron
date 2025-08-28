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
      iconSrc: '/assets/vectors/arrowr.png',
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
      iconSrc: '/assets/vectors/arrowr.png',
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
      iconSrc: '/assets/vectors/arrowr.png',
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
      iconSrc: '/assets/vectors/arrowr.png',
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
      iconSrc: '/assets/vectors/arrow.png',
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
      iconSrc: '/assets/vectors/arrowr.png',
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
    <section className="w-full bg-white py-8 lg:py-12 xl:py-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row  overflow-hidden  rounded-lg ">
          
          {/* Left Side - Orange Container with Industry Selection */}
          <aside className="w-full lg:w-[483px] bg-[#CF8700] rounded-l-lg flex items-center justify-center py-8 lg:py-16">
            <div className="space-y-3 w-full px-6 lg:px-0">
              {currentData.industries.map((industry, index) => (
               <div
  key={index}
  className={`cursor-pointer transition-all duration-300 mx-auto lg:mx-8 flex items-center justify-between px-5 py-4
    ${industry.active 
      ? 'bg-white border-3 border-white rounded-l-[40px] lg:w-[458px]' 
      : 'bg-white border-3 border-[#CF8700] rounded-[30px] lg:w-[431px]'
    }
  `}
  style={{ height: '89px' }}
  onClick={(e) => {
    e.stopPropagation();
    setCurrentCard(index);
  }}
>
  {/* Text first */}
  <span
    className={`font-teko text-lg lg:text-3xl uppercase tracking-wide
      ${industry.active 
        ? 'text-[#CF8700] font-medium' 
        : 'text-black font-normal'
      }
    `}
  >
    {industry.name}
  </span>

  {/* Icon - only show for active step */}
  {industry.active && (
    <div className="flex-shrink-0 ml-8">
      <img 
        src={cardData[index].iconSrc} 
        alt={`${industry.name} icon`}
        className="w-8 h-8 object-contain"
      />
    </div>
  )}
</div>
              ))}
            </div>
          </aside>

          {/* Right Side - Main Content */}
          <div className="flex-1 bg-[#FFF7E9] cursor-pointer relative ml-2" onClick={nextCard}>
            <div className="flex flex-col lg:flex-row min-h-[665px]">
              
              {/* Content Section */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16">
                <div className="mb-8">
                  <h1 className="font-teko text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
               font-normal text-[#CF8700] uppercase tracking-wide 
               leading-tight mb-4 whitespace-nowrap">
  INDUSTRIES WE SERVE
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
      {/* Circle with chevron */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#CF8700]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="white" 
          className="w-3.5 h-3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
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
        </div>
      </div>
    </section>
  );
};

export default IndustriesCards;