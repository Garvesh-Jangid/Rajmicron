import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Verified, MessageCircle } from 'lucide-react';

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
    <header className="bg-white shadow-sm">
      <div 
        className="mx-auto px-4"
        style={{
          width: '1805px',
          height: '80.60px',
          position: 'relative',
          top: '26px',
          left: '62px',
          opacity: 1
        }}
      >
        {/* Top section with logo, company info and contact */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 space-y-4 lg:space-y-0">
          {/* Logo and Company Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <div 
              className="rounded flex items-center justify-center flex-shrink-0"
              style={{
                width: '69.63px',
                height: '80px'
              }}
            >
              <img 
                src="/assets/logo/Untitled design (27) 1.png" 
                alt="Raj Micron Logo" 
                className="w-full h-full object-contain rounded"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-teal-500 font-bold text-lg">RM</span>';
                }}
              />
            </div>
            
            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h1 
                className="text-gray-800"
                style={{
                  fontFamily: 'Teko, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '52.43px',
                  lineHeight: '50.23px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                RAJ MICRON PRIVATE LIMITED
              </h1>
              <div className="flex flex-col sm:flex-row sm:space-x-4 text-l sm:text-sm text-gray-600 mt-1 space-y-1 sm:space-y-0">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">Bidiyad, Parbatsar (Raj.)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Verified className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">GST NO : 08AANCRB385B1ZY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            {/* Call Section - All in one border */}
            <div className="flex items-center space-x-3 border border-gray-300 rounded p-3" style={{ backgroundColor: '#F2F2F2' }}>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded"
                  title="WhatsApp us"
                >
                  <MessageCircle className="w-5 h-5" style={{ color: '#CF8700' }} />
                </button>
                <span className="text-gray-400 text-lg">|</span>
                <button
                  onClick={handleCall}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors rounded"
                  title="Call us"
                >
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="flex flex-col justify-center">
                <p 
                  className="text-gray-800 uppercase" 
                  style={{
                    fontFamily: 'Teko',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '26px',
                    letterSpacing: '0.125em',
                    textTransform: 'uppercase'
                  }}
                >
                  CALL US
                </p>
                <p 
                  className="text-gray-600" 
                  style={{
                    fontFamily: 'Teko',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23px',
                    letterSpacing: '0.125em',
                    textTransform: 'uppercase'
                  }}
                >
                  +91 97408 08234
                </p>
              </div>
            </div>

            {/* Email Section - All in one border */}
            <div className="flex items-center space-x-3 border border-gray-300 rounded p-3" style={{ backgroundColor: '#F2F2F2' }}>
              <button
                onClick={handleEmail}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded"
                title="Email us"
              >
                <span className="text-lg font-bold" style={{ color: '#CF8700' }}>@</span>
              </button>
              <div className="flex flex-col justify-center">
                <p 
                  className="text-gray-800 uppercase" 
                  style={{
                    fontFamily: 'Teko',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '26px',
                    letterSpacing: '0.125em',
                    textTransform: 'uppercase'
                  }}
                >
                  EMAIL US
                </p>
                <p 
                  className="text-gray-600" 
                  style={{
                    fontFamily: 'Teko',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '23px',
                    letterSpacing: '0.125em'
                  }}
                >
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

        {/* Mobile Contact Info (visible only on small screens) */}
        <div className="sm:hidden pb-4 border-t border-gray-100 pt-4">
          <div className="flex justify-between text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+91 97408 08234</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>rajmicronpvtltd@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav 
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:block border-t border-gray-200`}
          style={{ 
            backgroundColor: '#FFF7E9',
            width: '1805px',
            height: '75px',
            position: 'absolute',
            top: '120px',
            left: '0px',
            opacity: 1
          }}
        >
          <ul 
            className="flex flex-col lg:flex-row"
            style={{
              width: '1172.54px',
              height: '62px',
              position: 'relative',
              top: '6px',
              left: '55px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '65px'
            }}
          >
            <li>
              <a 
                href="#home" 
                className="flex items-center justify-center text-white transition-all duration-300"
                style={{ 
                  backgroundColor: '#CF8700',
                  width: '119.87px',
                  height: '62px',
                  borderRadius: '6.89px',
                  opacity: 1,
                  fontFamily: 'Teko',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '31px',
                  lineHeight: '41.33px',
                  letterSpacing: '2.48px',
                  wordSpacing: '4px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                style={{
                  width: '119.87px',
                  height: '62px',
                  borderRadius: '6.89px',
                  opacity: 1,
                  fontFamily: 'Teko',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '31px',
                  lineHeight: '41.33px',
                  letterSpacing: '2.48px',
                  wordSpacing: '4px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#CF8700'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a 
                href="#why-choose" 
                className="flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                style={{
                  width: '250px',
                  height: '62px',
                  borderRadius: '6.89px',
                  opacity: 1,
                  fontFamily: 'Teko',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '31px',
                  lineHeight: '41.33px',
                  letterSpacing: '2.48px',
                  wordSpacing: '4px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#CF8700'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => setIsMenuOpen(false)}
              >
                WHY CHOOSE US ?
              </a>
            </li>
            <li>
              <a 
                href="#industries" 
                className="flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                style={{
                  width: '119.87px',
                  height: '62px',
                  borderRadius: '6.89px',
                  opacity: 1,
                  fontFamily: 'Teko',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '31px',
                  lineHeight: '41.33px',
                  letterSpacing: '2.48px',
                  wordSpacing: '4px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#CF8700'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => setIsMenuOpen(false)}
              >
                INDUSTRIES
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleProducts}
                className="flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                style={{
                  width: '150px',
                  height: '62px',
                  borderRadius: '6.89px',
                  opacity: 1,
                  fontFamily: 'Teko',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '31px',
                  lineHeight: '41.33px',
                  letterSpacing: '2.48px',
                  wordSpacing: '4px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#CF8700'}
                onMouseLeave={(e) => {
                  if (!isProductsOpen) e.target.style.backgroundColor = 'transparent';
                }}
              >
                PRODUCTS
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="lg:absolute lg:top-full lg:left-0 lg:bg-white lg:shadow-lg lg:border lg:border-gray-200 lg:min-w-80 bg-gray-50 lg:bg-white z-50">
                  <a 
                    href="#gcc" 
                    className="block px-4 lg:px-6 py-3 text-gray-700 hover:bg-gray-100 text-sm border-b border-gray-200"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                  >
                    Ground Calcium Carbonate (GCC)
                  </a>
                  <a 
                    href="#pcc" 
                    className="block px-4 lg:px-6 py-3 text-gray-700 hover:bg-gray-100 text-sm"
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
                className="flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
                style={{
                  width: '119.87px',
                  height: '62px',
                  borderRadius: '6.89px',
                  opacity: 1,
                  fontFamily: 'Teko',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '31px',
                  lineHeight: '41.33px',
                  letterSpacing: '2.48px',
                  wordSpacing: '4px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#CF8700'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;