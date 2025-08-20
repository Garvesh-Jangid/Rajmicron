import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative bg-white overflow-hidden"
      style={{
        width: '1669px',
        height: '569px',
        position: 'absolute',
        top: '224px',
        left: '126px',
        opacity: 1
      }}
    >
      <div className="h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center h-full w-full">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full pl-8 pr-4">
            {/* Quality Calcium Carbonate Title */}
            <h1 
              className="text-gray-800 mb-6 leading-tight"
              style={{
                fontFamily: 'Teko, sans-serif',
                fontWeight: 700,
                fontSize: '64px',
                height: '69px',
                lineHeight: '60px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}
            >
              QUALITY CALCIUM CARBONATE
            </h1>
            
            {/* Suitable For */}
            <div className="mb-4">
              <p 
                className="text-gray-800"
                style={{
                  fontFamily: 'Teko, sans-serif',
                  fontWeight: 500,
                  fontSize: '36px',
                  lineHeight: '40px',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                SUITABLE FOR
              </p>
            </div>
            
            {/* PAINTS - Large Orange Text */}
            <div className="mb-8">
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'Font 1, sans-serif',
                  fontWeight: 800,
                  fontSize: '120px',
                  lineHeight: '110px',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: '#CF8700',
                  textShadow: '2px 2px 4px rgba(207, 135, 0, 0.3)'
                }}
              >
                PAINTS
              </h2>
            </div>
            
            {/* Description */}
            <p 
              className="text-gray-700 mb-8 max-w-lg"
              style={{
                fontFamily: 'Teko, sans-serif',
                fontWeight: 400,
                fontSize: '26px',
                lineHeight: '38px',
                letterSpacing: '0.01em'
              }}
            >
              Delivering premium GCC and PCC products with unmatched quality, 
              sustainability, and innovation — sourced from nature, refined for performance.
            </p>
            
            {/* CTA Buttons */}
          <div className="flex space-x-4">
  {/* Send Enquiry Button */}
  <button 
    className="relative transition-all duration-300 hover:scale-105 hover:shadow-xl"
    style={{
      width: '197px',
      height: '65px',
      backgroundColor: '#F8F8F8',
      borderRadius: '5px',
      border: '1px solid #D3D3D3',
      fontFamily: 'Teko, sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: '#333333',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#CF8700';
      e.target.style.borderColor = '#CF8700';
      e.target.style.color = 'white';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#F8F8F8';
      e.target.style.borderColor = '#D3D3D3';
      e.target.style.color = '#333333';
      e.target.style.transform = 'scale(1)';
    }}
  >
    SEND ENQUIRY →
  </button>

  {/* Explore Products Button */}
  <button 
    className="relative transition-all duration-300 hover:scale-105 hover:shadow-xl"
    style={{
      width: '197px',
      height: '65px',
      backgroundColor: '#F8F8F8',
      borderRadius: '5px',
      border: '1px solid #D3D3D3',
      fontFamily: 'Teko, sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: '#333333',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#E5E5E5';
      e.target.style.borderColor = '#BCBCBC';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#F8F8F8';
      e.target.style.borderColor = '#D3D3D3';
      e.target.style.transform = 'scale(1)';
    }}
  >
    EXPLORE PRODUCTS →
  </button>
</div>

          </div>
          
          {/* Right Content - Image */}
          <div className="relative h-full flex items-center justify-center">             
  <div className="relative w-full h-[500px]">               
              
    <img                  
      src="/assets/images/Image (1).png"                 
      alt="Raj Micron Industrial Manufacturing Facility"                 
      className="object-cover shadow-2xl relative z-0"
      style={{
        width: '668px',
        height: '549px',
        top: '2px',
        left: '170px',
        position: 'absolute',
        borderRadius: '20px',
        opacity: 1,
        filter: 'brightness(1.05) contrast(1.1)',
        
      }}                 
      onError={(e) => {                   
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDYwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRTVFN0VCIiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIzMDAiIHk9IjI2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNkI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbmR1c3RyaWFsIEZhY2lsaXR5PC90ZXh0Pgo8L3N2Zz4=';                 
      }}               
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;