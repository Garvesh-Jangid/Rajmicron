import React from 'react';

const About = () => {
  return (
    <>
      {/* Google Fonts Link */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="about"
        className="relative overflow-hidden bg-white py-16 lg:py-20"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Header */}
          <div className="mb-16">
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-6"
              style={{ fontFamily: 'Teko, sans-serif' }}
            >
              About Us
            </h2>

            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 uppercase tracking-wide leading-tight mb-8"
              style={{ fontFamily: 'Teko, sans-serif' }}
            >
              RAJ MICRON : FROM EARTH TO EXCELLENCE
            </h3>

            <p className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-800 uppercase tracking-wide leading-relaxed max-w-6xl">
              At Raj Micron, we are committed to producing Natural Ground Calcium Carbonate that meets the highest global quality standards.
              Our operations are built on precision, innovation, and sustainability, ensuring that every product we deliver contributes to our
              clients' success. From paints and plastics to paper and pharmaceuticals, our GCC plays a vital role in diverse industries.
            </p>
          </div>

          {/* Factory Images */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* First Image - Full Height */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-64 lg:h-80">
                <img
                  src="/assets/aboutus/interior/Rectangle 4.png"
                  alt="Factory Interior 1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAuNSAxMDAuNUwyOTkuNSAyOTkuNSIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjMiLz4KPHA6dGggZD0iTTEwMC41IDI5OS41TDI5OS41IDEwMC41IiBzdHJva2U9IiM5QjlCQTMiIHN0cm9rZS13aWR0aD0iMyIvPgo8dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUJBMyIgZm9udC1zaXplPSIxNiI+RmFjdG9yeSBJbnRlcmlvcjwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>
              
              {/* Second Image - Full Height */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-64 lg:h-80">
                <img
                  src="/assets/aboutus/interior/Rectangle 5.png"
                  alt="Factory Interior 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAuNSAxMDAuNUwyOTkuNSAyOTkuNSIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjMiLz4KPHA6dGggZD0iTTEwMC41IDI5OS41TDI5OS41IDEwMC41IiBzdHJva2U9IiM5QjlCQTMiIHN0cm9rZS13aWR0aD0iMyIvPgo8dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUJBMyIgZm9udC1zaXplPSIxNiI+UHJvZHVjdGlvbjwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>
              
              {/* Third Column - Image + Buttons */}
              <div className="flex flex-col gap-4">
                {/* Third Image */}
                <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-48 lg:h-56">
                  <img
                    src="/assets/aboutus/interior/Rectangle 6.png"
                    alt="Product Processing"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAuNSAxMDAuNUwyOTkuNSAyOTkuNSIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjMiLz4KPHA6dGggZD0iTTEwMC41IDI5OS41TDI5OS41IDEwMC41IiBzdHJva2U9IiM5QjlCQTMiIHN0cm9rZS13aWR0aD0iMyIvPgo8dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlCOUJBMyIgZm9udC1zaXplPSIxNiI+UHJvY2Vzc2luZzwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                </div>
                
                {/* Action Buttons Row */}
                <div className="flex gap-2 h-16 lg:h-20">
                  <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase tracking-wide transition-all duration-300 text-xs sm:text-sm flex items-center justify-center rounded-md transform hover:scale-105">
                    LEARN MORE &gt;
                  </button>
                  <button className="flex-1 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 font-bold uppercase tracking-wide transition-all duration-300 text-xs sm:text-sm flex items-center justify-center rounded-md transform hover:scale-105">
                    CONTACT US &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {[
              {
                title: 'Excellence',
                text: 'Delivering products that meet the highest global standards. Every batch reflects consistency and precision.',
                iconSrc: '/assets/aboutus/icons/Vector.png'
              },
              {
                title: 'Ingenuity', 
                text: 'Driving innovation with advanced techniques and solutions. Turning challenges into opportunities.',
                iconSrc: '/assets/aboutus/icons/Group.png'
              },
              {
                title: 'Eco-Responsibility',
                text: 'Committed to environmentally friendly practices. Protecting resources for future generations.',
                iconSrc: '/assets/aboutus/icons/Group 3.png'
              },
              {
                title: 'Progress',
                text: 'Continuously expanding capabilities and reach. Fostering long-term success for clients and partners.',
                iconSrc: '/assets/aboutus/icons/Vector (1).png'
              },
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="bg-[#FFF7E9] p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start justify-start h-64 lg:h-72"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={item.iconSrc}
                    alt={`${item.title} icon`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiNGRkI4MDAiLz4KPHBhdGggZD0iTTI0IDI0SDE0MEw0MCA0MEgyNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
                
                <h4 
                  className="text-2xl lg:text-3xl font-normal text-gray-800 uppercase tracking-wide leading-tight mb-3"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  {item.title}
                </h4>
                <p className="text-base lg:text-lg text-gray-700 uppercase tracking-wide leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;