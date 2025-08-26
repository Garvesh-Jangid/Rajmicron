import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Settings, Eye, BarChart3, Globe, Leaf } from 'lucide-react';

const QualityBenchmarks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benchmarks = [
    {
      icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />,
      title: "98%+ PURITY",
      description: "High-grade calcium carbonate sourced from premium deposits, delivering exceptional chemical and physical properties for demanding applications."
    },
    {
      icon: <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />,
      title: "CUSTOM PARTICLE SIZE",
      description: "Tailored to your requirements, from coarse granules to ultra-fine micron-level powders, ensuring optimal performance for specific uses."
    },
    {
      icon: <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />,
      title: "95%+ WHITENESS INDEX",
      description: "Brilliant white finish for enhanced brightness and visual quality in end products like paints, paper, and plastics."
    },
    {
      icon: <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />,
      title: "50,000 MT CAPACITY",
      description: "Robust annual production capability to ensure uninterrupted supply for large-scale industrial demands."
    },
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />,
      title: "70+ COUNTRIES SERVED",
      description: "Global reach with reliable logistics, delivering CaCO₃ to clients across continents with consistent quality."
    },
    {
      icon: <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />,
      title: "ECO-FRIENDLY PROCESS",
      description: "Sustainable mining and energy-efficient manufacturing methods, minimizing environmental impact and preserving natural resources."
    }
  ];

  // Dynamic cards per slide based on screen size
  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4; // default
  };

  const [cardsPerSlide] = useState(() => getCardsPerSlide());
  const totalSlides = Math.ceil(benchmarks.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleCards = benchmarks.slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide);

  return (
    <>
      {/* Google Fonts Link */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="quality-benchmarks"
        className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16 xl:py-20"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'Teko, sans-serif' }}
            >
              OUR QUALITY BENCHMARKS
            </h2>

            <h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800 uppercase tracking-wide leading-tight"
              style={{ fontFamily: 'Teko, sans-serif' }}
            >
              PRECISION AND PURITY IN EVERY GRAIN
            </h3>
          </div>

          {/* Benchmarks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {visibleCards.map((benchmark, index) => (
              <div 
                key={currentSlide * cardsPerSlide + index} 
                className="bg-[#FFF7E9] p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-start min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] text-center transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4 flex items-center justify-center bg-white rounded-full shadow-sm">
                  {benchmark.icon}
                </div>
                
                <h4 
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-800 uppercase tracking-wide leading-tight mb-2 sm:mb-3"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  {benchmark.title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 uppercase tracking-wide leading-relaxed flex-grow">
                  {benchmark.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Controls - Now Below Cards */}
          <div className="flex justify-center items-center gap-4 sm:gap-8">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? 'bg-yellow-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={currentSlide >= totalSlides - 1}
              aria-label="Next slide"
            >
              <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 ${currentSlide >= totalSlides - 1 ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Mobile-friendly slide indicator */}
          <div className="text-center mt-4 sm:hidden">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} of {totalSlides}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityBenchmarks;