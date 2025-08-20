import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="#FFF7E9">
      {/* Top Contact Bar */}
      <div className="#FFF7E9">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Bichod, Parbatsar (Raj.)</span>
            <span className="text-gray-600">GST NO : 08AANCRB358B1ZV</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" />
              <span className="text-gray-700">WhatsApp</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-orange-500" />
              <div>
                <span className="text-gray-700 font-semibold">CALL US</span>
                <br />
                <span className="text-gray-600">+91 67400 00234</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-orange-500" />
              <div>
                <span className="text-gray-700 font-semibold">EMAIL US</span>
                <br />
                <span className="text-gray-600">RAJMICRONPVTLTD@GMAIL.COM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-50 container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RM</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">RAJ MICRON PRIVATE LIMITED</h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            <a href="#home" className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition">
              HOME
            </a>
            <a href="#about" className="text-gray-700 font-semibold hover:text-orange-500 transition">
              ABOUT US
            </a>
            <a href="#why-choose" className="text-gray-700 font-semibold hover:text-orange-500 transition">
              WHY CHOOSE US ?
            </a>
            <a href="#industries" className="text-gray-700 font-semibold hover:text-orange-500 transition">
              INDUSTRIES
            </a>
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-orange-500 transition"
              >
                <span>PRODUCTS</span>
                <FaChevronDown className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  <a href="#gcc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ground Calcium Carbonate</a>
                  <a href="#pcc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Precipitated Calcium Carbonate</a>
                </div>
              )}
            </div>
            <a href="#services" className="text-gray-700 font-semibold hover:text-orange-500 transition">
              SERVICES
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
