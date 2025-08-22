import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Settings, Eye, BarChart3, Globe, Leaf } from 'lucide-react';

const QualityBenchmarks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benchmarks = [
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "98%+ PURITY",
      description: "High-grade calcium carbonate sourced from premium deposits, delivering exceptional chemical and physical properties for demanding applications."
    },
    {
      icon: <Settings className="w-12 h-12 text-yellow-600" />,
      title: "CUSTOM PARTICLE SIZE",
      description: "Tailored to your requirements, from coarse granules to ultra-fine micron-level powders, ensuring optimal performance for specific uses."
    },
    {
      icon: <Eye className="w-12 h-12 text-yellow-600" />,
      title: "95%+ WHITENESS INDEX",
      description: "Brilliant white finish for enhanced brightness and visual quality in end products like paints, paper, and plastics."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-600" />,
      title: "50,000 MT CAPACITY",
      description: "Robust annual production capability to ensure uninterrupted supply for large-scale industrial demands."
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-600" />,
      title: "70+ COUNTRIES SERVED",
      description: "Global reach with reliable logistics, delivering CaCO₃ to clients across continents with consistent quality."
    },
    {
      icon: <Leaf className="w-12 h-12 text-yellow-600" />,
      title: "ECO-FRIENDLY PROCESS",
      description: "Sustainable mining and energy-efficient manufacturing methods, minimizing environmental impact and preserving natural resources."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(benchmarks.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(benchmarks.length / 4)) % Math.ceil(benchmarks.length / 4));
  };

  const visibleCards = benchmarks.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <>
      {/* Google Fonts Link */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="quality-benchmarks"
        className="relative overflow-hidden bg-white py-16 lg:py-20"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16">
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-6"
              style={{ fontFamily: 'Teko, sans-serif' }}
            >
              OUR QUALITY BENCHMARKS
            </h2>

            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 uppercase tracking-wide leading-tight mb-8"
              style={{ fontFamily: 'Teko, sans-serif' }}
            >
              PRECISION AND PURITY IN EVERY GRAIN
            </h3>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:scale-105"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className={`w-6 h-6 ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(benchmarks.length / 4) }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? 'bg-yellow-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:scale-105"
              disabled={currentSlide >= Math.ceil(benchmarks.length / 4) - 1}
            >
              <ChevronRight className={`w-6 h-6 ${currentSlide >= Math.ceil(benchmarks.length / 4) - 1 ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Benchmarks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {visibleCards.map((benchmark, index) => (
              <div 
                key={currentSlide * 4 + index} 
                className="bg-[#FFF7E9] p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-start h-64 lg:h-72 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {benchmark.icon}
                </div>
                
                <h4 
                  className="text-2xl lg:text-3xl font-normal text-gray-800 uppercase tracking-wide leading-tight mb-3"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  {benchmark.title}
                </h4>
                <p className="text-base lg:text-lg text-gray-700 uppercase tracking-wide leading-relaxed">
                  {benchmark.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityBenchmarks;