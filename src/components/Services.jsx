import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🚛',
      title: 'Timely Delivery',
      description: 'Reliable supply chain management ensuring on-time delivery across India.',
      bgColor: 'bg-teal-100'
    },
    {
      icon: '🔬',
      title: 'Quality Testing',
      description: 'Comprehensive quality testing and certification for all our products.',
      bgColor: 'bg-orange-100'
    },
    {
      icon: '🤝',
      title: 'Custom Solutions',
      description: 'Tailored calcium carbonate solutions to meet specific industry requirements.',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your calcium carbonate needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;