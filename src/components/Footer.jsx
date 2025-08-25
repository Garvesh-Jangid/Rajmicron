import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Youtube, Verified } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="relative bg-gray-900 text-white py-12"
      style={{
        backgroundImage: 'url(/assets/footer/bgfooter.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
      
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Company Info */}
          <div className="lg:col-span-1">
            {/* Logo and Company Name */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 mb-6">
              <div className="w-16 h-20 sm:w-18 sm:h-20 rounded flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/logo/Untitled design (27) 1.png"
                  alt="Raj Micron Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span class="text-teal-600 font-bold text-2xl">RM</span>';
                  }}
                />
              </div>

              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <h1
                  className="text-lg sm:text-xl lg:text-2xl font-medium text-white uppercase tracking-wide leading-tight text-center sm:text-left"
                  style={{ fontFamily: "Teko, sans-serif" }}
                >
                  RAJ MICRON PRIVATE LIMITED
                </h1>

                <div
                  className="flex flex-col sm:flex-row sm:space-x-6 text-sm sm:text-base text-gray-300 mt-2 space-y-2 sm:space-y-0 font-normal"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    <span className="truncate">Bidiyad, Parbatsar (Raj.)</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <Verified className="w-4 h-4 flex-shrink-0 text-green-400" />
                    <span className="truncate text-xs sm:text-sm">GST NO: 08AANCRB385B1ZY</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6" style={{ fontFamily: 'sans-serif' }}>
              At Raj Micron Private Limited, we specialize in the production of 
              Natural Ground Calcium Carbonate (GCC) and Precipitated 
              Calcium Carbonate (PCC). With a focus on quality, sustainability, 
              and innovation, we deliver premium GCC and PCC products that 
              meet the diverse needs of industries worldwide.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="lg:col-span-1 lg:ml-8">
            <h3 className="text-yellow-400 font-bold text-lg mb-6 tracking-wide" style={{ fontFamily: 'sans-serif' }}>
              QUICK LINKS
            </h3>
            <nav className="space-y-3">
              {[
                'About Us',
                'Particle Size',
                'Our Products',
                'Why Choose Us ?',
                'Industries',
                'Services',
                'Process',
                'Testimonials',
                "FAQ's"
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-yellow-400 font-bold text-lg mb-6 tracking-wide" style={{ fontFamily: 'sans-serif' }}>
              CONTACT US
            </h3>
            
            {/* Phone Number */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="font-semibold" style={{ fontFamily: 'sans-serif' }}>Phone Number</span>
              </div>
              <div className="ml-8 space-y-1 text-sm text-gray-300" style={{ fontFamily: 'sans-serif' }}>
                <div>+91 9929702991</div>
                <div>+91 9928157991</div>
              </div>
            </div>
            
            {/* Email Address */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="font-semibold" style={{ fontFamily: 'sans-serif' }}>Email Address</span>
              </div>
              <div className="ml-8 text-sm text-gray-300" style={{ fontFamily: 'sans-serif' }}>
                Rajmicronpvtltd@gmail.com
              </div>
            </div>
            
            {/* Registered Address */}
            <div>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="font-semibold" style={{ fontFamily: 'sans-serif' }}>Registered Address</span>
              </div>
              <div className="ml-8 text-sm text-gray-300" style={{ fontFamily: 'sans-serif' }}>
                E-203A, RIICO Industrial Area,<br />
                Bidiyad, Parbatsar (Raj.)<br />
                341542
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-6 text-sm">
              {['Terms & Conditions', 'Privacy Policy', 'Cookies'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-300" style={{ fontFamily: 'sans-serif' }}>
                © 2025. Rajmicron Private Limited. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1" style={{ fontFamily: 'sans-serif' }}>
                Design and Developed by <span className="text-red-400 font-semibold">LunarEdge</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors z-10">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;