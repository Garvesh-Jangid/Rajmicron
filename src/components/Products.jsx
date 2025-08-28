import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="products"
      className={`relative overflow-hidden py-6 lg:py-8 slide-container ${isVisible ? 'slide-in' : ''}`}
    >
      <div className="bg-[#FFF7E9] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                  
        {/* Header Section */}
        <div className="text-center lg:text-left mb-10 lg:mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-3 font-teko">
            OUR PRODUCTS
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-800 uppercase tracking-wide leading-tight max-w-5xl whitespace-nowrap font-teko">
            QUALITY, CONSISTENCY, AND PERFORMANCE IN EVERY PRODUCT WE SUPPLY.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4 max-w-4xl mx-auto lg:mx-0">
                     
          {/* GCC Product Card */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 lg:mb-5">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/products/Ellipse 7.png"
                  alt="Ground Calcium Carbonate (GCC)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 uppercase tracking-wide leading-tight max-w-xs font-teko">
              Ground Calcium Carbonate (GCC)
            </h3>
          </div>
           
          {/* PCC Product Card */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 lg:mb-5">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/products/Ellipse 8.png"
                  alt="Precipitated Calcium Carbonate (PCC)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 uppercase tracking-wide leading-tight max-w-xs font-teko">
              Precipitated Calcium Carbonate (PCC)
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;