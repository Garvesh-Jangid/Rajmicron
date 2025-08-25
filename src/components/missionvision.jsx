import React from 'react';

const MissionVision = () => {
  return (
    <section 
      id="mission-vision"
      className="relative overflow-hidden py-10 lg:py-2"
    >
      <div className="bg-[#ffffff] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14"> 
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-12">
          {/* Mission Section - Left */}
          <div className="w-96 bg-yellow-600 rounded-lg p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-white text-6xl font-regular uppercase tracking-wide mb- font-teko">
                OUR MISSION
              </h2>

              {/* Mission Points */}
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'Deliver high-purity GCC products that meet international standards.'
                  },
                  {
                    num: '02',
                    title: 'Ensure sustainable sourcing and eco-friendly production practices.'
                  },
                  {
                    num: '03',
                    title: 'Foster long-term partnerships by exceeding client expectations.'
                  }
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-white rounded-full px-6 py-4 flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <span className="text-4xl font-regular font-teko text-gray-800">
                        {item.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-regular font-teko text-gray-800 leading-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Section - Right */}
          <div className="flex-1 flex h-full">
            {/* Vision Content */}
            <div className="bg-[#FFF7E9] flex-1 pr-8 flex flex-col justify-between py-2">
              <div>
                <h2 className="text-5xl lg:text-6xl xl:text-6xl font-regular text-yellow-600 uppercase tracking-wide leading-tight mb- font-teko">
                  OUR VISION
                </h2>

                <h3 className="text-xl lg:text-2xl xl:text-4xl font-regular font-teko text-gray-800 uppercase tracking-wide leading-tight mb-6">
                  WHERE PURPOSE MEETS PROGRESS
                </h3>

                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl font-rubik font-regular">
                  To become a global leader in premium Ground Calcium Carbonate solutions, setting benchmarks in quality,
                  sustainability, and innovation.
                </p>
              </div>

              {/* Statistics */}
              <div className="flex gap-12 lg:gap-16 font-regular font-teko">
                <div>
                  <h4 className="text-4xl lg:text-5xl xl:text-6xl font-regular text-gray-800 mb-2">
                    100%
                  </h4>
                  <p className="text-sm lg:text-base text-gray-700 uppercase font-regular leading-tight">
                    CUSTOMER-CENTRIC<br />APPROACH
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl lg:text-5xl xl:text-6xl font-regular text-gray-800 mb-2">
                    20+
                  </h4>
                  <p className="text-sm lg:text-base text-gray-700 uppercase font-regular leading-tight">
                    COUNTRIES<br />SERVED
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl lg:text-5xl xl:text-6xl font-regular text-gray-800 mb-2">
                    100%
                  </h4>
                  <p className="text-sm lg:text-base text-gray-700 uppercase font-regular leading-tight">
                    SUSTAINABLE<br />PRACTICES
                  </p>
                </div>
              </div>
            </div>

            {/* Factory Images - Right Side */}
            <div className="w-72 xl:w-80 flex flex-col gap-4 justify-center">
              <div className="rounded-lg overflow-hidden h-40 lg:h-44 xl:h-48 shadow-lg">
                <img
                  src="/assets/aboutus/exterior/image 5.png"
                  alt="Factory Exterior Top"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNEMUQ1REIiIHN0cm9rZT0iIzlCOUJBMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0Y5RkFGQiIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHR2eHQgeD0iMjAwIiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5QjlCQTMiIGZvbnQtc2l6ZT0iMTYiPkZhY3RvcnkgMTwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>

              <div className="rounded-lg overflow-hidden h-40 lg:h-44 xl:h-48 shadow-lg">
                <img
                  src="/assets/aboutus/exterior/image 5.png"
                  alt="Factory Exterior Bottom"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNEMUQ1REIiIHN0cm9rZT0iIzlCOUJBMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0Y5RkFGQiIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHR2eHQgeD0iMjAwIiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5QjlCQTMiIGZvbnQtc2l6ZT0iMTYiPkZhY3RvcnkgMjwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          {/* Mission Section Mobile */}
          <div className="bg-yellow-600 rounded-lg p-6 mb-8 font-teko">
            <h2 className="text-white text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-6 font-teko">
              OUR MISSION
            </h2>

            <div className="space-y-3">
              {[
                {
                  num: '01',
                  title: 'Deliver high-purity GCC products that meet international standards.'
                },
                {
                  num: '02',
                  title: 'Ensure sustainable sourcing and eco-friendly production practices.'
                },
                {
                  num: '03',
                  title: 'Foster long-term partnerships by exceeding client expectations.'
                }
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-full px-4 py-3 flex items-center gap-3"
                >
                 
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section Mobile */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-600 uppercase tracking-wide leading-tight mb-3">
              OUR VISION
            </h2>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 uppercase tracking-wide leading-tight mb-4">
              WHERE PURPOSE MEETS PROGRESS
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              To become a global leader in premium Ground Calcium Carbonate solutions, setting benchmarks in quality,
              sustainability, and innovation.
            </p>

            {/* Statistics Mobile */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                  100%
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 uppercase font-bold leading-tight">
                  CUSTOMER-CENTRIC<br />APPROACH
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                  20+
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 uppercase font-bold leading-tight">
                  COUNTRIES<br />SERVED
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                  100%
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 uppercase font-bold leading-tight">
                  SUSTAINABLE<br />PRACTICES
                </p>
              </div>
            </div>

            {/* Factory Images Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-40 shadow-lg">
                <img
                  src="/assets/aboutus/exterior/image 5.png"
                  alt="Factory Exterior 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNEMUQ1REIiIHN0cm9rZT0iIzlCOUJBMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0Y5RkFGQiIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHR2eHQgeD0iMjAwIiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5QjlCQTMiIGZvbnQtc2l6ZT0iMTYiPkZhY3RvcnkgMTwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>

              <div className="rounded-lg overflow-hidden h-40 shadow-lg">
                <img
                  src="/assets/aboutus/exterior/image 5.png"
                  alt="Factory Exterior 2"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;