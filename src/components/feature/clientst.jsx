import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ClientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "RAVI MEHTA",
      position: "Procurement Manager",
      company: "Paper Manufacturing Corp.",
      testimonial: "The exceptional whiteness and purity of their GCC has significantly improved the brightness of our paint formulations. Reliable supply and great technical support."
    },
    {
      name: "SIDDHA TURNER",
      position: "Operations Head, Global",
      company: "Polymer Solutions Ltd.",
      testimonial: "We needed a consistent micron size for our polymer applications, and they delivered with precision every time. Professional, efficient, and always on schedule."
    },
    {
      name: "ARJUN DESAI",
      position: "Director, Production",
      company: "Industrial Coatings Inc.",
      testimonial: "Their GCC has helped us achieve higher brightness in our paper products while optimizing costs. A trustworthy supplier we've worked with for years."
    },
    {
      name: "LAURA MARTÍNEZ",
      position: "Director, Manufacturing",
      company: "Sustainable Plastics Co.",
      testimonial: "In construction materials, consistency is everything – and they've never disappointed. Strong technical expertise and excellent after-sales support."
    },
    {
      name: "PRIYA NAIR",
      position: "Sourcing Manager",
      company: "EcoFoam India",
      testimonial: "Sustainable matters to us, and they share that vision. Their eco-friendly mining and manufacturing practices align perfectly with our brand values."
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
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide);

  return (
    <section
      id="client-testimonials"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16 xl:py-20"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="font-teko text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: 'Teko, sans-serif' }}
          >
            CLIENT TESTIMONIALS
          </h2>

          <h3
            className="font-teko text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800 uppercase tracking-wide leading-tight mb-6"
            style={{ fontFamily: 'Teko, sans-serif' }}
          >
            HEAR WHAT OUR CLIENTS HAVE TO SAY
          </h3>

          <p 
            className="text-lg sm:text-xl lg:text-lg font-normal text-gray-800 uppercase tracking-wide leading-relaxed max-w-8xl"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            At Raj Micron, we go beyond supplying Ground Calcium Carbonate – we provide customized, end-to-end solutions that align with your exact industry requirements. From specialized production to global delivery, our services ensure quality, efficiency, and reliability at every stage.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={currentSlide * cardsPerSlide + index} 
              className="bg-[#FFF7E9] p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-start min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] text-left transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-yellow-600 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-yellow-600 rounded"></div>
              </div>

              
              {/* Name */}
              <h4 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal text-yellow-600 uppercase tracking-wide leading-tight mb-2 sm:mb-3 relative z-10"
                style={{ fontFamily: 'Teko, sans-serif' }}
              >
                {testimonial.name}
              </h4>
              
              {/* Position */}
              <div 
                className="text-sm sm:text-base lg:text-lg text-gray-600 mb-1 relative z-10"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                {testimonial.position}
              </div>
              
              {/* Company */}
              <div 
                className="text-sm sm:text-base lg:text-lg text-gray-500 mb-4 relative z-10"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                {testimonial.company}
              </div>
              
              {/* Testimonial Text */}
              <p 
                className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed flex-grow relative z-10"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Below Cards */}
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
          <span 
            className="text-sm text-gray-500"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            {currentSlide + 1} of {totalSlides}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;