import { Radius } from 'lucide-react';
import React, { useState } from 'react';

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    product: '',
    quantity: '',
    productPackaging: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your enquiry! Our team will respond within 24 hours.');
  };

  return (
    <div 
      style={{
        width: '1920px',
        height: '877px',
        top: '8362px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute'
      }}
      className="bg-white overflow-hidden"
    >
      <div className="w-full h-full px-8 py-6 overflow-y-auto">
        
        {/* Header Section */}
        <div styles ={{left: '195px'}} className="text-center mb-8">
          <h1 className="text-4xl lg:text-6xl font-normal uppercase leading-tight mb-3" 
              style={{ color: "#CF8700", fontFamily: "Font 1, sans-serif" }}>
            SEND US YOUR REQUIREMENT
          </h1>
          <p className="text-lg lg:text-2xl font-normal uppercase leading-tight" 
             style={{ color: "#060606", fontFamily: "Font 1, sans-serif" }}>
            FILL IN THE DETAILS BELOW, AND OUR TEAM WILL RESPOND WITHIN 24 HOURS.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="space-y-6">
            
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Product</option>
                  <option value="industrial-equipment">Industrial Equipment</option>
                  <option value="raw-materials">Raw Materials</option>
                  <option value="packaging-materials">Packaging Materials</option>
                  <option value="chemicals">Chemicals</option>
                  <option value="machinery">Machinery</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Quantity</option>
                  <option value="1-10">1-10 units</option>
                  <option value="11-50">11-50 units</option>
                  <option value="51-100">51-100 units</option>
                  <option value="101-500">101-500 units</option>
                  <option value="500+">500+ units</option>
                  <option value="bulk">Bulk Order</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select
                  name="productPackaging"
                  value={formData.productPackaging}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Product packaging (25 kg)</option>
                  <option value="25kg">25 kg bags</option>
                  <option value="50kg">50 kg bags</option>
                  <option value="bulk">Bulk packaging</option>
                  <option value="custom">Custom packaging</option>
                  <option value="drums">Drums</option>
                  <option value="containers">Containers</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <textarea
                name="description"
                placeholder="Describe Your Requirement"
                value={formData.description}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 resize-vertical"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button Section */}
        <div className="text-left">
          <button
            onClick={handleSubmit}
            className="bg-[#CF8700] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg tracking-wider transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-lg"
          >
            SUBMIT ENQUIRY →
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default RequirementForm;