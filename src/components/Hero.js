import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative bg-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            
            {/* Quality Calcium Carbonate Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-meduim text-gray-800 leading-none uppercase tracking-wide" style={{ fontFamily: 'Teko, sans-serif', weight : '600' }}>
              QUALITY CALCIUM CARBONATE
            </h1>
            
            {/* Suitable For */}
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 uppercase tracking-wide">
                SUITABLE FOR
              </p>
            </div>
            
            {/* PAINTS - Large Orange Text */}
            <div className="my-4">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-yellow-600 leading-none uppercase tracking-wide drop-shadow-lg">
                PAINTS
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Delivering premium GCC and PCC products with unmatched quality, 
              sustainability, and innovation — sourced from nature, refined for performance.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              {/* Send Enquiry Button */}
              <button className="bg-gray-100 hover:bg-yellow-600 hover:text-white border border-gray-300 hover:border-yellow-600 px-8 py-4 rounded-md font-semibold text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-48">
                SEND ENQUIRY >
              </button>

              {/* Explore Products Button */}
              <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-md font-semibold text-base text-gray-700 uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-48">
                EXPLORE PRODUCTS >
              </button>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative flex items-center justify-center lg:justify-end">             
            <div className="relative w-full max-w-2xl">               
              <img                  
                src="/assets/images/Image (1).png"                 
                alt="Raj Micron Industrial Manufacturing Facility"                 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                style={{
                  filter: 'brightness(1.05) contrast(1.1)'
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