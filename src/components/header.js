import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Verified, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const handleCall = () => {
    window.open('tel:+919740808234', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:rajmicronpvtltd@gmail.com', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919740808234', '_blank');
  };

  return (
    <>
      {/* Google Fonts Link */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <header className="bg-white shadow-sm relative">
        {/* Top section with logo, company info and contact */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 space-y-4 lg:space-y-0">
            {/* Logo and Company Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
              <div className="w-16 h-20 sm:w-18 sm:h-20 rounded flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/logo/Untitled design (27) 1.png" 
                  alt="Raj Micron Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-teal-600 font-bold text-2xl">RM</span>';
                  }}
                />
              </div>
              
              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <h1 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-800 uppercase tracking-wide leading-tight text-center sm:text-left"
                  style={{ fontFamily: 'Teko, sans-serif' }}
                >
                  RAJ MICRON PRIVATE LIMITED
                </h1>
                <div className="flex flex-col sm:flex-row sm:space-x-6 text-base sm:text-lg text-gray-700 mt-3 space-y-2 sm:space-y-0 font-medium">
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-gray-600" />
                    <span className="truncate">Bidiyad, Parbatsar (Raj.)</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <Verified className="w-5 h-5 flex-shrink-0 text-green-600" />
                    <span className="truncate">GST NO : 08AANCRB385B1ZY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex space-x-4 lg:mr-8">
              {/* Call Section */}
              <div className="flex items-center space-x-3 border border-gray-300 rounded-lg p-3 bg-gray-50">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWhatsApp}
                    className="w-10 h-10 flex items-center justify-center hover:bg-green-100 transition-colors rounded-full group"
                    title="WhatsApp us"
                  >
                    <FaWhatsapp className="w-9 h-9 text-green-600 group-hover:text-green-600 transition-colors" />
                  </button>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <button
                    onClick={handleCall}
                    className="w-10 h-10 flex items-center justify-center hover:bg-blue-100 transition-colors rounded-full group"
                    title="Call us"
                  >
                    <Phone className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </button>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-800 font-semibold text-lg uppercase tracking-wider">
                    CALL US
                  </p>
                  <p className="text-gray-600 text-base tracking-wide">
                    +91 97408 08234
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-center space-x-3 border border-gray-300 rounded-lg p-3 bg-gray-50">
                <button
                  onClick={handleEmail}
                  className="w-10 h-10 flex items-center justify-center hover:bg-orange-100 transition-colors rounded-full group"
                  title="Email us"
                >
                  <span className="text-xl font-bold text-yellow-600 group-hover:text-orange-600 transition-colors">@</span>
                </button>
                <div className="flex flex-col">
                  <p className="text-gray-800 font-semibold text-lg uppercase tracking-wider">
                    EMAIL US
                  </p>
                  <p className="text-gray-600 text-sm tracking-wide truncate max-w-48">
                    rajmicronpvtltd@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="lg:hidden pb-4 pt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 text-sm text-gray-700 font-medium">
              <button 
                onClick={handleCall}
                className="flex items-center justify-center sm:justify-start space-x-2 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 97408 08234</span>
              </button>
              <button 
                onClick={handleEmail}
                className="flex items-center justify-center sm:justify-start space-x-2 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">rajmicronpvtltd@gmail.com</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FFF7E9]">
              <ul className="flex flex-col lg:flex-row lg:justify-start lg:items-center py-2 lg:py-0 space-y-2 lg:space-y-0 lg:space-x-8 lg:ml-8">
                <li>
                  <a 
                    href="#home" 
                    className="flex items-center justify-center lg:justify-center px-6 py-3 lg:py-4 text-white bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 rounded-lg lg:rounded-md font-medium text-lg lg:text-xl uppercase tracking-widest transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="flex items-center justify-center lg:justify-center px-6 py-3 lg:py-4 text-gray-700 hover:text-white hover:bg-yellow-600 transition-all duration-300 rounded-lg lg:rounded-md font-medium text-lg lg:text-xl uppercase tracking-widest transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a 
                    href="#why-choose" 
                    className="flex items-center justify-center lg:justify-center px-6 py-3 lg:py-4 text-gray-700 hover:text-white hover:bg-yellow-600 transition-all duration-300 rounded-lg lg:rounded-md font-medium text-lg lg:text-xl uppercase tracking-widest transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WHY CHOOSE US?
                  </a>
                </li>
                <li>
                  <a 
                    href="#industries" 
                    className="flex items-center justify-center lg:justify-center px-6 py-3 lg:py-4 text-gray-700 hover:text-white hover:bg-yellow-600 transition-all duration-300 rounded-lg lg:rounded-md font-medium text-lg lg:text-xl uppercase tracking-widest transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    INDUSTRIES
                  </a>
                </li>
                <li className="relative">
                  <button
                    onClick={toggleProducts}
                    className="flex items-center justify-center lg:justify-center w-full px-6 py-3 lg:py-4 text-gray-700 hover:text-white hover:bg-yellow-600 transition-all duration-300 rounded-lg lg:rounded-md font-medium text-lg lg:text-xl uppercase tracking-widest transform hover:scale-105"
                  >
                    PRODUCTS
                    <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProductsOpen && (
                    <div className="lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-1 lg:bg-white lg:shadow-lg lg:border lg:border-gray-200 lg:min-w-80 lg:rounded-md bg-gray-100 lg:bg-white z-50">
                      <a 
                        href="#gcc" 
                        className="block px-6 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 text-base border-b border-gray-200 lg:border-b-0 lg:rounded-t-md transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsOpen(false);
                        }}
                      >
                        Ground Calcium Carbonate (GCC)
                      </a>
                      <a 
                        href="#pcc" 
                        className="block px-6 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 text-base lg:rounded-b-md transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductsOpen(false);
                        }}
                      >
                        Precipitated Calcium Carbonate (PCC)
                      </a>
                    </div>
                  )}
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="flex items-center justify-center lg:justify-center px-6 py-3 lg:py-4 text-gray-700 hover:text-white hover:bg-yellow-600 transition-all duration-300 rounded-lg lg:rounded-md font-medium text-lg lg:text-xl uppercase tracking-widest transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SERVICES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;