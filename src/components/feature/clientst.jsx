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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 4)) % Math.ceil(testimonials.length / 4));
  };

  const visibleTestimonials = testimonials.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        top: '6500px',
        width: '1920px', 
        height: '597px',
        margin: '0 auto',
        background: '#ffffff',
      }}
    >
      {/* Header Section */}
      <div style={{
        position: 'absolute',
        left: '200px',
        top: '0px',
        width: '1211px',
        height: '136px',
        transform: 'rotate(0deg)',
        opacity: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '8px'
        }}>
          <div style={{
            fontFamily: 'Font 1',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '90px',
            lineHeight: '63px',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            color: '#CF8700',
            width: '100%'
          }}>
            CLIENT TESTIMONIALS
          </div>
          <div style={{
            position: 'absolute',
            width: '1211px',
            height: '36px',
            top: '100px',
            left: '0px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Font 1',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '50px',
            lineHeight: '36px',
            letterSpacing: '1.2%',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            color: '#374151'
          }}>
            HEAR WHAT OUR CLIENTS HAVE TO SAY
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        position: 'absolute',
        left: '200px',
        top: '160px',
        width: '1400px',
        fontSize: '18px',
        lineHeight: '24px',
        color: '#6B7280',
        fontFamily: 'Font 1'
      }}>
        At Raj Micron, we go beyond supplying Ground Calcium Carbonate – we provide customized, end-to-end solutions that align with your exact industry requirements. From specialized production to global delivery, our services ensure quality, efficiency, and reliability at every stage.
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

      {/* Testimonial Cards Container */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#FFF7E9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow "
            style={{ 
              width: '300px', 
              height: '280px',
              borderRadius: '8px'
            }}
          >
            <div className="flex flex-col h-full">
              {/* Quote Icon */}
              <div className="flex justify-start mb-3">
                
              </div>
              
              {/* Name and Position */}
              <h3 className="text-[#CF8700] font-bold text-lg mb-1 leading-tight">
                {testimonial.name}
              </h3>
              
              <div className="text-gray-600 text-sm mb-1">
                {testimonial.position}
              </div>
              
              <div className="text-gray-500 text-sm mb-4">
                {testimonial.company}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {testimonial.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-[#0EA5E9]' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Frame Label (Frame 13) */}
      <div className="absolute top-4 right-4 text-sm text-gray-400">
        Frame 13
      </div>
    </div>
  );
};

export default ClientTestimonials;