import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [elementsVisible, setElementsVisible] = useState({
    title: false,
    subtitle: false,
    paints: false,
    description: false,
    buttons: false,
    image: false
  });

  useEffect(() => {
    // Trigger main dropdown animation
    const dropdownTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Staggered element animations
    const staggerTimers = [
      setTimeout(() => setElementsVisible(prev => ({ ...prev, title: true })), 600),
      setTimeout(() => setElementsVisible(prev => ({ ...prev, subtitle: true })), 800),
      setTimeout(() => setElementsVisible(prev => ({ ...prev, paints: true })), 1000),
      setTimeout(() => setElementsVisible(prev => ({ ...prev, description: true })), 1400),
      setTimeout(() => setElementsVisible(prev => ({ ...prev, buttons: true })), 1600),
      setTimeout(() => setElementsVisible(prev => ({ ...prev, image: true })), 1200),
    ];

    // Stop cursor blinking after typewriter animation completes
    const typewriterTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4500);

    return () => {
      clearTimeout(dropdownTimer);
      clearTimeout(typewriterTimer);
      staggerTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section
      id="home"
      className={`relative bg-white overflow-hidden dropdown-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Reduced top padding */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-6">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
                      
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
                         
            {/* Quality Calcium Carbonate Title */}
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-medium text-gray-800 leading-none uppercase tracking-wide fade-in-element ${elementsVisible.title ? 'visible' : ''}`}
              style={{ fontFamily: 'Teko, sans-serif', fontWeight: '600', width: '800px' }}
            >
              QUALITY CALCIUM CARBONATE
            </h1>
                         
            {/* Suitable For */}
            <div className={`fade-in-element ${elementsVisible.subtitle ? 'visible' : ''}`}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-teko font-regular text-gray-800 uppercase tracking-wide">
                SUITABLE FOR
              </p>
            </div>
                         
            {/* PAINTS - Large Orange Text with Typewriter Animation */}
            <div className={`my-3 fade-in-element ${elementsVisible.paints ? 'visible' : ''}`}>
              <h2 className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-teko font-extrabold text-yellow-600 leading-none uppercase tracking-wide drop-shadow-lg typewriter ${animationComplete ? 'animation-complete' : ''}`}>
                PAINTS
              </h2>
            </div>
                         
            {/* Description */}
            <p
              className={`text-2xl font-rubik text-gray-700 leading-snug tracking-tight max-w-2xl break-words fade-in-element ${elementsVisible.description ? 'visible' : ''}`}
            >
              Delivering premium GCC and PCC products with unmatched quality,
               sustainability, and innovation — sourced from nature, refined for performance.
            </p>
                         
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4 fade-in-element ${elementsVisible.buttons ? 'visible' : ''}`}>
              {/* Send Enquiry Button */}
              <button className="bg-gray-100 hover:bg-yellow-600 hover:text-white border border-gray-300 hover:border-yellow-600 px-8 py-4 rounded-md font-teko font-semibold text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-48">
                SEND ENQUIRY >
              </button>
               
              {/* Explore Products Button */}
              <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-md font-teko font-semibold text-base text-gray-700 uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-48">
                EXPLORE PRODUCTS >
              </button>
            </div>
          </div>
                     
          {/* Right Content - Image */}
          <div className={`relative flex items-center justify-center lg:justify-end fade-in-element ${elementsVisible.image ? 'visible' : ''}`}>
                         
            <div className="relative w-full max-w-xl">
              <img
                src="/assets/images/Image (1).png"
                alt="Raj Micron Industrial Manufacturing Facility"
                className="w-full h-auto object-cover rounded-2xl "
                style={{
                  filter: 'brightness(1.05) contrast(1.1)'
                }}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;