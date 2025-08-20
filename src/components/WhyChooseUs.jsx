import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Unmatched quality standards with rigorous testing and quality control processes.',
      bgColor: 'bg-teal-100'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Environmentally responsible manufacturing processes and sustainable sourcing practices.',
      bgColor: 'bg-orange-100'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Cutting-edge technology and continuous innovation in product development.',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Excellence in every aspect of our service</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
