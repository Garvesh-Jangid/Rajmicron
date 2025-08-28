import React, { useState } from 'react';
import './RequirementForm.css';

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

  const [isFormFocused, setIsFormFocused] = useState(false);

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

  const handleFocus = () => {
    setIsFormFocused(true);
  };

  const handleBlur = () => {
    // Small delay to prevent flicker when moving between form fields
    setTimeout(() => {
      const activeElement = document.activeElement;
      const isFormElement = activeElement && (
        activeElement.closest('.form-container') || 
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'SELECT' || 
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.tagName === 'BUTTON'
      );
      
      if (!isFormElement) {
        setIsFormFocused(false);
      }
    }, 100);
  };

  const handleOverlayClick = () => {
    setIsFormFocused(false);
    // Remove focus from any active form element
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  return (
    <>
      {/* Background Overlay */}
      {isFormFocused && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={handleOverlayClick}
        />
      )}

      <div className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-6 transition-all duration-300 ${isFormFocused ? 'form-focused' : ''}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-0">
        
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="font-teko text-4xl lg:text-5xl xl:text-8xl font-regular text-yellow-600 uppercase tracking-wide leading-tight mb-4">
              SEND US YOUR REQUIREMENT
            </h1>
            <p className="font-teko text-2xl lg:text-xl xl:text-5xl font-regular text-gray-800 uppercase leading-tight mb-4">
              FILL IN THE DETAILS BELOW, AND OUR TEAM WILL RESPOND WITHIN 24 HOURS.
            </p>
          </div>

          {/* Form Section */}
          <div className={`bg-white rounded-lg p-6 sm:p-8 mb-6 form-container transition-all duration-300 ${isFormFocused ? 'form-elevated' : ''}`}>
            
            {/* Close Button (only visible when focused) */}
            {isFormFocused && (
              <button
                onClick={handleOverlayClick}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-50 close-button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            )}

            <div className="space-y-6">
              
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Product</option>
                    <option value="industrial-equipment">Industrial Equipment</option>
                    <option value="raw-materials">Raw Materials</option>
                    <option value="packaging-materials">Packaging Materials</option>
                    <option value="chemicals">Chemicals</option>
                    <option value="machinery">Machinery</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 pointer-events-none">
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
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Quantity</option>
                    <option value="1-10">1-10 units</option>
                    <option value="11-50">11-50 units</option>
                    <option value="51-100">51-100 units</option>
                    <option value="101-500">101-500 units</option>
                    <option value="500+">500+ units</option>
                    <option value="bulk">Bulk Order</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 pointer-events-none">
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
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Product packaging (25 kg)</option>
                    <option value="25kg">25 kg bags</option>
                    <option value="50kg">50 kg bags</option>
                    <option value="bulk">Bulk packaging</option>
                    <option value="custom">Custom packaging</option>
                    <option value="drums">Drums</option>
                    <option value="containers">Containers</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 pointer-events-none">
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  rows="6"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-0 rounded-lg text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all duration-300 resize-vertical"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button Section */}
          <div className="font-teko">
            <button
              type="submit"
              onClick={handleSubmit}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="bg-[#CF8700] text-white font-[400] font-teko py-2 px-8 rounded-sm hover:bg-[#c8933b] transition-colors uppercase text-lg tracking-wider"
            >
              Submit Enquiry &gt;
            </button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default RequirementForm;