import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 97408 08234'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'rajmicronpvtltd@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Bidiyad, Parbatsar, Rajasthan'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-teal-100">Ready to discuss your calcium carbonate requirements?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div key={index}>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-teal-100">{contact.info}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors">
            Send Enquiry Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;