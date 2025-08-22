import React from 'react';

const Products = () => {
  return (
    <section 
      id="products"
      className="relative overflow-hidden py-16 lg:py-20"
    >
      <div className="bg-[#FFF7E9] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Header Section */}
        <div className="text-center lg:text-left mb-12 lg:mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-4">
            OUR PRODUCTS
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-800 uppercase tracking-wide leading-tight max-w-5xl whitespace-nowrap">
            QUALITY, CONSISTENCY, AND PERFORMANCE IN EVERY PRODUCT WE SUPPLY.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto lg:mx-0">
          
          {/* GCC Product Card */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 lg:mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/products/Ellipse 7.png"
                  alt="Ground Calcium Carbonate (GCC)"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjQwIiB5PSI4MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzlCOUJBMyIgcng9IjQiLz4KPHN2ZyB4PSI3MCIgeT0iOTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzY5NzA3QiI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjMiIGZpbGw9IiM2OTcwN0IiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxMCIgcj0iMyIgZmlsbD0iIzY5NzA3QiIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjEwIiByPSIzIiBmaWxsPSIjNjk3MDdCIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMTAiIHI9IjMiIGZpbGw9IiM2OTcwN0IiLz4KPGN4PUI1MCIgY3k9IjEwIiByPSIzIiBmaWxsPSIjNjk3MDdCIi8+CjwvZz4KPC9zdmc+';
                  }}
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 uppercase tracking-wide leading-tight max-w-xs">
              Ground Calcium Carbonate (GCC)
            </h3>
          </div>

          {/* PCC Product Card */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-4 lg:mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/products/Ellipse 8.png"
                  alt="Precipitated Calcium Carbonate (PCC)"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjMwIiB5PSI3MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI0ZGRkZGRiIgcng9IjgiLz4KPHN2ZyB4PSI0MCIgeT0iODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIGZpbGw9IiM2OTcwN0IiPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjIwIiByPSI0IiBmaWxsPSIjRkZGRkZGIi8+CjxjaXJjbGUgY3g9IjM1IiBjeT0iMjAiIHI9IjQiIGZpbGw9IiNGRkZGRkYiLz4KPGN4PSI1NSIgY3k9IjIwIiByPSI0IiBmaWxsPSIjRkZGRkZGIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iMjAiIHI9IjQiIGZpbGw9IiNGRkZGRkYiLz4KPGN4PSI5NSIgY3k9IjIwIiByPSI0IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPC9zdmc+';
                  }}
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 uppercase tracking-wide leading-tight max-w-xs">
              Precipitated Calcium Carbonate (PCC)
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;