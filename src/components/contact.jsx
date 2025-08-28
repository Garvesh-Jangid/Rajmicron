import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Plus, Minus } from 'lucide-react';

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  // Get user's geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, []);

  const faqs = [
    {
      question: "What is the purity level of your GCC?",
      answer: "Our GCC is sourced from high-grade calcite deposits and has a purity of 98%+, ensuring consistent quality."
    },
    {
      question: "Can you customize particle sizes?",
      answer: "Yes, we can customize particle sizes according to your specific requirements. We offer various micron grades to match different industrial applications."
    },
    {
      question: "Do you export internationally?",
      answer: "Yes, we export to over 20 countries worldwide with reliable logistics and supply chain management to ensure timely delivery."
    },
    {
      question: "Are your products safe for food and pharmaceutical use?",
      answer: "Our products meet international safety standards and are suitable for food-grade and pharmaceutical applications with proper certifications."
    },
    {
      question: "What is your production capacity?",
      answer: "We have a robust production capacity that can handle large-scale orders while maintaining consistent quality standards."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-2 lg:py-4">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-lg ">
          
          {/* Left Side - Orange Container with Contact Info */}
          <aside className="w-full lg:w-[483px] bg-[#CF8700] rounded-l-lg flex items-center justify-center py-2 lg:py-4">
            <div className="w-full px-6 lg:px-8">
              <h2 
                className="font-teko text-2xl sm:text-3xl lg:text-6xl font-regular uppercase tracking-wide mb-6 lg:mb-8 text-white text-center lg:text-left"
                style={{ fontFamily: 'Teko, sans-serif' }}
              >
                CONTACT US 
              </h2>

              <div className="space-y-3 lg:space-y-4">
                {/* Phone Number */}
                <div className="bg-white bg-opacity-95 rounded-xl p-3 lg:p-4 flex items-center space-x-3 transition-all duration-300 hover:bg-opacity-100">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#CF8700] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-gray-800 font-medium text-xs lg:text-sm mb-1"
                      style={{ fontFamily: 'Teko, sans-serif' }}
                    >
                      PHONE NUMBER
                    </h3>
                    <p 
                      className="text-gray-700 text-xs lg:text-sm font-normal"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      +91 9929702991<br />
                      +91 9928157991
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="bg-white bg-opacity-95 rounded-xl p-3 lg:p-4 flex items-center space-x-3 transition-all duration-300 hover:bg-opacity-100">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#CF8700] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-gray-800 font-medium text-xs lg:text-sm mb-1"
                      style={{ fontFamily: 'Teko, sans-serif' }}
                    >
                      EMAIL ADDRESS
                    </h3>
                    <p 
                      className="text-gray-700 text-xs lg:text-sm font-normal"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      Rajmicronpvtltd@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white bg-opacity-95 rounded-xl p-3 lg:p-4 flex items-start space-x-3 transition-all duration-300 hover:bg-opacity-100">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#CF8700] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-gray-800 font-medium text-xs lg:text-sm mb-1"
                      style={{ fontFamily: 'Teko, sans-serif' }}
                    >
                      ADDRESS
                    </h3>
                    <p 
                      className="text-gray-700 text-xs lg:text-sm font-normal"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      E-203A, RIICO Industrial Area,<br />
                      Bidiyad, Parbatsar (Raj.) 341512
                    </p>
                  </div>
                </div>

                {/* Interactive Map with Geolocation */}
                <div className="bg-white bg-opacity-95 rounded-xl p-3 h-24 lg:h-28 flex items-center justify-center transition-all duration-300 hover:bg-opacity-100">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-green-400 opacity-30"></div>
                    {userLocation ? (
                      <div className="text-center z-10">
                        <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-red-500 mx-auto mb-1" />
                        <div 
                          className="text-xs text-gray-700 font-medium font-rubik"
                          
                        >
                          📍 Your Location: {userLocation.latitude.toFixed(2)}, {userLocation.longitude.toFixed(2)}
                        </div>
                      </div>
                    ) : locationError ? (
                      <div className="text-center z-10">
                        <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-red-500 mx-auto mb-1" />
                        <div 
                          className="text-xs text-gray-600"
                          style={{ fontFamily: 'Rubik, sans-serif' }}
                        >
                          📍 Parbatsar, Rajasthan
                        </div>
                      </div>
                    ) : (
                      <div className="text-center z-10">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#CF8700] mx-auto mb-1"></div>
                        <div 
                          className="text-xs text-gray-600"
                          style={{ fontFamily: 'Rubik, sans-serif' }}
                        >
                          Getting location...
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Side - Main Content */}
          <div className="flex-1 bg-[#FFF7E9] ml-2">
            <div className="flex flex-col min-h-[450px]">
              
              {/* Content Section */}
              <div className="flex-1 p-6 lg:p-8 xl:p-10">
                <div className="mb-6">
                  <h1 
                    className="font-teko text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#CF8700] uppercase tracking-wide leading-tight mb-3"
                    style={{ fontFamily: 'Teko, sans-serif' }}
                  >
                    FAQ'S
                  </h1>
                  
                  <h2 
                    className="font-teko text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-black uppercase tracking-wide leading-tight mb-4"
                    style={{ fontFamily: 'Teko, sans-serif' }}
                  >
                    YOUR QUERIES, ANSWERED WITH CLARITY
                  </h2>
                  
      

                  {/* View All FAQ's Button */}
                  <div className="flex justify-start mb-6">
                    <button 
                      className="font-teko bg-[#CF8700] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#B8770A] hover:shadow-lg uppercase tracking-wide text-sm font-normal"
                      style={{ fontFamily: 'Teko, sans-serif' }}
                    >
                      VIEW ALL FAQ'S >
                    </button>
                  </div>
                </div>

                {/* FAQ List */}
                <div className="space-y-2 max-w-[900px]">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-3 lg:p-4 text-left hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-2">
                          <span 
                            className="text-[#CF8700] font-medium text-sm lg:text-base flex-shrink-0"
                            style={{ fontFamily: 'Teko, sans-serif' }}
                          >
                            {index + 1}.
                          </span>
                          <span 
                            className="text-black font-medium text-sm lg:text-base"
                            style={{ fontFamily: 'Teko, sans-serif' }}
                          >
                            {faq.question.toUpperCase()}
                          </span>
                        </div>
                        <div className="w-7 h-7 bg-[#CF8700] rounded-full flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 hover:bg-[#B8770A]">
                          {openFAQ === index ? (
                            <Minus className="w-3 h-3 text-white" />
                          ) : (
                            <Plus className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </button>
                      
                      {openFAQ === index && (
                        <div className="px-3 lg:px-4 pb-3 lg:pb-4 bg-gray-50">
                          <div className="pl-6">
                            <p 
                              className="text-gray-700 text-xs lg:text-sm leading-relaxed font-normal"
                              style={{ fontFamily: 'Rubik, sans-serif' }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-6">
                  <button 
                    className="font-teko bg-[#CF8700] text-white px-6 py-3 rounded transition-all duration-300 hover:bg-[#B8770A] hover:shadow-lg uppercase tracking-wide text-base font-normal"
                    style={{ fontFamily: 'Teko, sans-serif' }}
                  >
                    CONTACT US NOW >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;