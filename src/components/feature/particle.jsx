import React, { useState } from 'react';

const ParticleSizeCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    {
      title: "MICRON, D50 (SUPER FINE)",
      description: "Our precision grinding technology produces ultra-fine GCC with a micron size ranging between 2.5 to 3.5 microns (D50). Ideal for high-performance applications such as premium paints, plastics, and specialty papers, this grade offers exceptional brightness and smoothness while maintaining tight particle size control.",
      sizeRange: "2.5 - 3.5 μM",
      feature: "EXCEPTIONAL BRIGHTNESS FOR PREMIUM PRODUCTS",
      yieldRate: "95%+",
      batchUniformity: "95%",
      consistency: "±0.1 μM",
      activeGrade: "Micron, D50 (Super Fine)",
      imageSrc: "/assets/particles/image 6 (1).png", 
      imageAlt: "Super fine particle size visualization",
      grades: [
        { name: "Micron, D50 (Super Fine)", active: true },
        { name: "Micron, D50 (Fine)", active: false },
        { name: "Micron, D50 (Medium Fine)", active: false },
        { name: "Micron, D50 (Coarse)", active: false }
      ]
    },
    {
      title: "MICRON, D50 (FINE)",
      description: "Produced with advanced micronizing systems, this grade has a particle size of 3.5 to 5.0 microns (D50), offering excellent opacity and smooth dispersion. Suitable for plastics, rubber, and coating industries, it ensures high purity and controlled particle size distribution for consistent performance.",
      sizeRange: "3.5 - 5.0 μM",
      feature: "SUPERIOR OPACITY FOR QUALITY APPLICATIONS",
      yieldRate: "90%+",
      batchUniformity: "98%",
      consistency: "±0.15 μM",
      activeGrade: "Micron, D50 (Fine)",
      imageSrc: "/assets/particles/image 6 (3).png", // Add your image path here
      imageAlt: "Fine particle size visualization",
      grades: [
        { name: "Micron, D50 (Super Fine)", active: false },
        { name: "Micron, D50 (Fine)", active: true },
        { name: "Micron, D50 (Medium Fine)", active: false },
        { name: "Micron, D50 (Coarse)", active: false }
      ]
    },
    {
      title: "MICRON, D50 (MEDIUM FINE)",
      description: "This grade offers a balanced micron size range of 5.0 to 10 microns (D50), making it versatile for applications in paper manufacturing, adhesives, and construction materials. It provides reliable performance with optimal particle packing and improved mechanical properties.",
      sizeRange: "5.0 - 10 μM",
      feature: "BALANCED PROPERTIES FOR VERSATILE USE",
      yieldRate: "92%+",
      batchUniformity: "97%",
      consistency: "±0.2 μM",
      activeGrade: "Micron, D50 (Medium Fine)",
      imageSrc: "/assets/particles/image 6 (4).png", // Add your image path here
      imageAlt: "Medium fine particle size visualization",
      grades: [
        { name: "Micron, D50 (Super Fine)", active: false },
        { name: "Micron, D50 (Fine)", active: false },
        { name: "Micron, D50 (Medium Fine)", active: true },
        { name: "Micron, D50 (Coarse)", active: false }
      ]
    },
    {
      title: "MICRON, D50 (COARSE)",
      description: "Our advanced processing ensures production of super-fine coarse-grade GCC with a size of 10 to 20 microns (D50). Designed for large-scale industrial needs, this grade maintains the highest quality standards while meeting robust monthly production capacities.",
      sizeRange: "10 - 20 μM",
      feature: "Maintaining the highest standards of quality",
      yieldRate: "93%+",
      batchUniformity: "95%",
      consistency: "±0.1 μM",
      activeGrade: "Micron, D50 (Coarse)",
      imageSrc: "/assets/particles/image 6 (5).png", // Add your image path here
      imageAlt: "Coarse particle size visualization",
      grades: [
        { name: "Micron, D50 (Super Fine)", active: false },
        { name: "Micron, D50 (Fine)", active: false },
        { name: "Micron, D50 (Medium Fine)", active: false },
        { name: "Micron, D50 (Coarse)", active: true }
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
        top: '3600px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute'
      }}
      className="flex "
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
  PARTICAL SIZE
</h1>
          
        <h2   className="text-2xl font-black text-gray-800 mb-2 tracking-tight"
  style={{
    width: '432px',
    height: '36px',
    top: '145px',
    left: '95px',
    transform: 'rotate(0deg)',
    opacity: 1,
    position: 'absolute',
    fontFamily: 'Font 1', // Replace with your actual font family
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
        <p className="text-2xl font-black text-gray-800 mb-2 tracking-tight"
  style={{
    width: '495px',
    height: '204px',
    top: '195px',
    left: '95px',
    transform: 'rotate(0deg)',
    opacity: 1,
    position: 'absolute',
    fontFamily: 'Font 2', // Replace with your actual font family
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '22px',
    lineHeight: '34px',
    letterSpacing: '0%',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    color: '#000000ff'
  }}
>
          {currentData.description}
        </p>
      </div>

      {/* Size Range Badge */}
      <div className="flex items-center gap-4 mb-6"style={{
    width: '595px',
    height: '204px',
    top: '350px',
    left: '95px',
    transform: 'rotate(0deg)',
    opacity: 1,
    position: 'absolute',
    fontFamily: 'Font 2', // Replace with your actual font family
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '22px',
    lineHeight: '34px',
    letterSpacing: '0%',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    color: '#000000ff'
  }}
>
        <div className="bg-orange-500 text-white px-3 py-2 rounded-full flex items-center gap-2">
          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-sm">{currentData.sizeRange}</span>
        </div>
        <div className="bg-orange-400 text-white px-4 py-2 rounded-full flex items-center gap-2">
          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-xs uppercase tracking-wide">
            {currentData.feature}
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="flex gap-6 mb-6"style={{
    width: '595px',
    height: '204px',
    top: '450px',
    left: '95px',
    transform: 'rotate(0deg)',
    opacity: 1,
    position: 'absolute',
    fontFamily: 'Font 2', // Replace with your actual font family
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '22px',
    lineHeight: '34px',
    letterSpacing: '0%',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    color: '#000000ff'
  }}
>
        <div className="text-center">
          <div className="text-3xl font-black text-gray-800">
            {currentData.yieldRate}
          </div>
          <div className="text-xs text-gray-600 uppercase font-bold">
            YIELD RATE
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-gray-800">
            {currentData.batchUniformity}
          </div>
          <div className="text-xs text-gray-600 uppercase font-bold">
            BATCH OF<br />UNIFORMITY
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-gray-800">
            {currentData.consistency}
          </div>
          <div className="text-xs text-gray-600 uppercase font-bold">
            CONSISTENCY
          </div>
        </div>
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
    fontFamily: 'Teko, sans-serif', // Replace with your actual font family
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

      {/* Second Section - Orange Container with Grade Selection */}
      <div 
        style={{
          width: '483px',
          height: '475px',
          top: '195px',
          backgroundColor: '#CF8700',
          opacity: 1,
          transform: 'rotate(0deg)',
          borderTopRightRadius: '7px',
          borderBottomRightRadius: '7px',
          
          
        }}
        className="flex items-center justify-center"
      >
        {/* Grade Selection */}
       <div className="space-y-3 w-full">
  {currentData.grades.map((grade, index) => (
    <div
      key={index}
      className="cursor-pointer transition-all duration-200 relative"
      style={{
        width: '431px',
        height: '89px',
        backgroundColor: 'white',
        border: grade.active ? '3px solid #fcfbfaff' : '3px solid #CF8700',
        marginLeft: grade.active ? '-50px' : '25px',
        borderRadius: '30px',
        padding: '12px 20px',
        boxShadow: grade.active ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
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
        className={`font-medium text-sm ${grade.active ? 'font-bold' : ''}`}
        style={{ 
          color: grade.active ? '#CF8700' : '#000000',
          fontSize: '16px',
          textTransform: 'uppercase'
        }}
      >
        {grade.name}
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

export default ParticleSizeCards;
