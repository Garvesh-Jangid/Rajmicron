import React from 'react';

const Industries = () => {
  const industries = [
    {
      icon: '🎨',
      title: 'Paints & Coatings',
      description: 'High-quality calcium carbonate for superior paint formulations.',
      bgColor: 'bg-orange-100'
    },
    {
      icon: '🏭',
      title: 'Plastics',
      description: 'Enhancing plastic properties with our premium calcium carbonate.',
      bgColor: 'bg-teal-100'
    },
    {
      icon: '📄',
      title: 'Paper Industry',
      description: 'Improving paper quality and brightness with our specialized products.',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '🏗️',
      title: 'Construction',
      description: 'Supporting construction materials with our durable calcium carbonate solutions.',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">Providing solutions across multiple sectors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${industry.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{industry.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{industry.title}</h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
