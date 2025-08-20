import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Settings, Eye, BarChart3, Globe, Leaf } from 'lucide-react';

const QualityBenchmarks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benchmarks = [
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "98%+ PURITY",
      description: "High-grade cards sourced from premium deposits, delivering exceptional chemical and physical consistency for demanding applications."
    },
    {
      icon: <Settings className="w-12 h-12 text-yellow-600" />,
      title: "CUSTOM PARTICLE SIZE",
      description: "Tailored to your requirements. From coarse granules to ultra-fine micron-level powders, ensuring optimal performance for various uses."
    },
    {
      icon: <Eye className="w-12 h-12 text-yellow-600" />,
      title: "95%+ WHITENESS INDEX",
      description: "Brilliant white finish for enhanced brightness and visual quality in end products like paint, paper, and plastics."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-600" />,
      title: "50,000 MT CAPACITY",
      description: "Robust annual production capability to ensure uninterrupted supply for large-scale industrial demands."
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-600" />,
      title: "70+ COUNTRIES SERVED",
      description: "Global reach with reliable logistics, delivering CaCO₃ clients across continents with consistent quality."
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
    <div 
      className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden"
      style={{ 
        top: '2908px',
        width: '1920px', 
        height: '531px',
        margin: '0 auto'
      }}
    >
      {/* Header Section */}
      <div className="absolute top-8 left-8">
        <div className="bg-orange-400 text-white px-6 py-3 font-bold text-lg tracking-wide">
          OUR QUALITY BENCHMARKS
        </div>
        <div className="text-gray-800 font-semibold text-base mt-2 tracking-wide">
          PRECISION AND PURITY IN EVERY GRAIN
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Cards Container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
        {visibleCards.map((benchmark, index) => (
          <div
            key={index}
            className="bg-[#FFF7E9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            style={{ 
              width: '323px', 
              height: '306px',
              borderRadius: '8px'
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-4">
                {benchmark.icon}
              </div>
              
              <h3 className="text-gray-800 font-bold text-lg text-center mb-4 leading-tight">
                {benchmark.title}
              </h3>
              
              <p className="text-gray-600 text-sm text-center leading-relaxed flex-grow">
                {benchmark.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: Math.ceil(benchmarks.length / 4) }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-orange-400' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Frame Labels */}
      <div className="absolute top-4 right-4 flex gap-4 text-sm text-gray-500">
        <span>Frame 12</span>
        <span>Frame 11</span>
      </div>
    </div>
  );
};

export default QualityBenchmarks;