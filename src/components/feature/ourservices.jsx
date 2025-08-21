import React, { useState } from 'react';
import { Package, Globe, Users, Award, Truck, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const services = [
    {
      icon: Package,
      title: "CUSTOM PARTICLE SIZE PRODUCTION",
      description: "Manufacturing GCC in various micron grades to match specific industrial applications. Ensuring optimal functionality and performance in every batch."
    },
    {
      icon: Globe,
      title: "BULK EXPORT EXPORT",
      description: "Reliable bulk sales supply capacity with timely, global delivery. Serving industries in 20+ countries with consistent quality."
    },
    {
      icon: Users,
      title: "TECHNICAL CONSULTATION",
      description: "Expert guidance on choosing the right GCC specifications. Helping clients optimize performance and cost-effectiveness."
    },
    {
      icon: Award,
      title: "QUALITY TESTING & CERTIFICATION",
      description: "Rigorous quality-checking to meet international quality standards. Providing full compliance documentation for every shipment."
    },
    {
      icon: Truck,
      title: "LOGISTICS & SUPPLY CHAIN SUPPORT",
      description: "Efficient, end-to-end supply chain management and global procurement, minimizing delays and ensuring on-time deliveries worldwide."
    }
  ];

  return (
    <div 
      className="relative overflow-hidden bg-white"
      style={{ 
        top: '4483px',
        width: '1920px', 
        height: '564px',
        margin: '0 auto'
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
            OUR SERVICES
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
            TAILORED SOLUTIONS FOR EVERY INDUSTRY
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

      {/* Services Cards Container */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
        {services.slice(currentSlide * 4, (currentSlide + 1) * 4).map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-[#FFF7E9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ 
                width: '320px', 
                height: '260px',
                borderRadius: '8px',
                border: '2px solid #E5E7EB',
                position: 'relative'
              }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-[#CF8700] rounded-full p-3">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-[#CF8700] font-bold text-sm mb-3 leading-tight text-center uppercase">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed flex-grow text-center">
                  {service.description}
                </p>

                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CF8700] to-[#FFB84D] rounded-b-lg"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 4)) % Math.ceil(services.length / 4))}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
        disabled={services.length <= 4}
        style={{ opacity: services.length <= 4 ? 0.5 : 1 }}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 4))}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
        disabled={services.length <= 4}
        style={{ opacity: services.length <= 4 ? 0.5 : 1 }}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Slide Indicators */}
      {services.length > 4 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? 'bg-[#0EA5E9]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}

      
    </div>
  );
};

export default OurServices;