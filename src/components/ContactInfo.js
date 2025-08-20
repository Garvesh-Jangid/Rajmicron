import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 py-2">
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
  );
};

export default ContactInfo;
