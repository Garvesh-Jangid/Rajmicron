import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "#FFFFFF",
        width: "1920px",
        height: "1600px",
        position: "absolute",
        top: "1400px",
        left: 0,
        opacity: 1
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Us Header */}
        <div className="mb-16">
          <h2
            style={{
              fontFamily: 'Font 1',
              fontWeight: 400,              // Regular
              fontSize: '90px',             // requested
              lineHeight: '60px',           // requested
              letterSpacing: '0',           // 0%
              textTransform: 'uppercase',   // requested
              color: '#CF8700',
              marginBottom: '24px',
              verticalAlign: 'middle',      // requested
            }}
          >
            About Us
          </h2>

          <h3
            className="mb-8"
            style={{ 
              fontFamily: 'Font 1',
              fontWeight: 400,
              fontSize: '50px',
              lineHeight: '40px',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#000'
            }}
          >
            RAJ MICRON : FROM EARTH TO EXCELLENCE
          </h3>

          <p 
            className="mb-8"
            style={{
              fontFamily: 'Font 2',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '34px',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#000'
            }}
          >
            At Raj Micron, we are committed to producing Natural Ground Calcium Carbonate that meets the highest global quality standards.
            Our operations are built on precision, innovation, and sustainability, ensuring that every product we deliver contributes to our
            clients' success. From paints and plastics to paper and pharmaceuticals, our GCC plays a vital role in diverse industries.
          </p>
        </div>

        {/* Factory Images */}
      <div className="mb-16">
  <div className="flex gap-2">
    {/* First Image - Full Height */}
    <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-gray-200 h-64">
      <img
        src="/assets/aboutus/interior/Rectangle 4.png"
        alt="Factory Interior 1"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Second Image - Full Height */}
    <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-gray-200 h-64">
      <img
        src="/assets/aboutus/interior/Rectangle 5.png"
        alt="Factory Interior 2"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Third Column - Image + Buttons */}
    <div className="flex-1 flex flex-col gap-2">
      {/* Third Image - Matching Height */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-48">
        <img
          src="/assets/aboutus/interior/Rectangle 6.png"
          alt="Product Processing"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Action Buttons Row */}
      <div className="flex gap-2">
        <button
           className="flex-1 text-white font-bold uppercase tracking-wide transition-opacity hover:opacity-90 text-xs flex items-center justify-center rounded-md h-16"
          style={{ backgroundColor: '#CF8700' }}
        >
          LEARN MORE &gt;
        </button>
        <button
          className="flex-1 border-2 font-bold uppercase tracking-wide transition-colors hover:bg-opacity-50 text-xs flex items-center justify-center rounded-md h-16"
          style={{ 
            borderColor: '#CF8700', 
            color: '#CF8700',
            backgroundColor: '#F8F8F8'
          }}
        >
          CONTACT US &gt;
        </button>
      </div>
    </div>
  </div>
</div>




        {/* Core Values */}
     <div className="flex justify-between items-start mb-16" style={{ gap: '24px' }}>
  {[
    {
      title: 'Excellence',
      text: 'Delivering products that meet the highest global standards. Every batch reflects consistency and precision.',
      iconSrc: '/assets/aboutus/icons/Vector.png' // Add your icon path here
    },
    {
      title: 'Ingenuity', 
      text: 'Driving innovation with advanced techniques and solutions. Turning challenges into opportunities.',
      iconSrc: '/assets/aboutus/icons/Group.png' // Add your icon path here
    },
    {
      title: 'Eco-Responsibility',
      text: 'Committed to environmentally friendly practices. Protecting resources for future generations.',
      iconSrc: '/assets/aboutus/icons/Group 3.png' // Add your icon path here
    },
    {
      title: 'Progress',
      text: 'Continuously expanding capabilities and reach. Fostering long-term success for clients and partners.',
      iconSrc: '/assets/aboutus/icons/Vector (1).png' // Add your icon path here
    },
  ].map((item, index) => (
    <div 
      key={item.title} 
      style={{
        width: '336px',
        height: '258px',
        top: '640px',
        backgroundColor: '#FFF7E9',
        opacity: 1,
        transform: 'rotate(0deg)',
        transformOrigin: 'top left',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: '8px'
      }}
    >
      {/* Icon placeholder - you can add your own icon here */}
      <img 
        src={item.iconSrc}
        alt={`${item.title} icon`}
        className="w-16 h-16 mb-4"
        style={{ objectFit: 'contain' }}
      />
      
      <h4 
        className="mb-2"
        style={{
          fontFamily: 'Font 1',
          fontWeight: 400,
          fontSize: '35px',
          lineHeight: '36px',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: '#000',
          textAlign: 'left'
        }}
      >
        {item.title}
      </h4>
      <p 
        className="text-sm text-gray-600"
        style={{ fontFamily: 'Font 2',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '28px',
          letterSpacing: '0.00em',
          textTransform: 'uppercase',
          color: '#000',
          textAlign: 'left' }}
      >
        {item.text}
      </p>
    </div>
  ))}
</div>


        {/* Mission and Vision */}
        <div className="relative" style={{ height: '425px' }}>
  {/* Mission Section */}
  <div 
    className="absolute p-8 rounded-l-lg"
    style={{
      backgroundColor: '#CF8700',
      width: '483px',
      height: '425px',
      left: '0px',
      top: '0px',
      borderTopLeftRadius: '7px',
      borderBottomLeftRadius: '7px'
    }}
  >
    <h3 
      className="absolute"
    style={{
      fontFamily: 'Font 1',
      fontWeight: 400,
      fontSize: '50px',
      lineHeight: '36px',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: '#FFFFFF',
      width: '259px',
      height: '36px',
      top: '32px',
      left: '33px'
    }}
      
    >
      Our Mission
    </h3>

      <div className="pt-20">
    {[
    {
      num: '01',
      title: 'Deliver high-purity GCC products that meet international standards.',
      
    },
    {
      num: '02',
      title: 'Ensure sustainable sourcing and eco-friendly production practices.',
     
    },
    {
      num: '03',
      title: 'Foster long-term partnerships by exceeding client expectations.',
     
    },
  ].map((row, index) => (
    <div 
      key={row.num} 
      className="absolute bg-white flex items-center px-6 py-4"
      style={{
        width: '431px',
        height: '89px',
        top: `${94 + (index * 100)}px`,
        left: '25px',
        borderRadius: '30px'
      }}
    >
      {/* Number and text both inside the white container */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"  style={{ backgroundColor: '#ffffffff', color: '#000000ff' }}><span
          style={{
            fontFamily: 'Teko',
            fontWeight: 400,
            fontSize: '50px',
            lineHeight: '40px',
            letterSpacing: '1px',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'uppercase'
          }}
        >
          {row.num}
        </span>
        
      </div>
      
      <div className="flex-1">
               <h4 
          className="mb-1"
          style={{
            fontFamily: 'Font 1',
            fontWeight: 400,
            fontSize: '30px',
            lineHeight: '34.5px',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: '#000000'
          }}
        >
          {row.title}
        </h4>

        <p className="text-gray-700 text-xs leading-tight">{row.sub}</p>
      </div>
    </div>
  ))}
</div>
</div>

  {/* Vision Section */}
  <div 
  className="absolute"
  style={{
    backgroundColor: '#FFF7E9',
    width: '1229px',
    height: '425px',
    left: '491px',
    top: '0px'
  }}
>
  {/* Our Vision Section - Left */}
  <div 
    className="absolute"
    style={{
      width: '617px',
      height: '380px',
      top: '30px',
      left: '10px'
    }}
  >
    <h3 
      className="mb-4"
      style={{
        fontFamily: 'Font 1',
        fontWeight: 400,
        fontSize: '60px',
        lineHeight: '28px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: '#CF8700'
      }}
    >
      Our Vision
    </h3>
    <h4 
      className="mb-4"
      style={{
        fontFamily: 'Teko, sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: '#000'
      }}
    >
      Where Purpose Meets Progress
    </h4>
    <p className="text-gray-700 mb-6">
      To become a global leader in premium Ground Calcium Carbonate solutions, setting benchmarks in quality,
      sustainability, and innovation.
    </p>

    {/* Statistics */}
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <h4 className="text-3xl font-bold" style={{ color: '#CF8700' }}>
          100%
        </h4>
        <p className="text-sm text-gray-600 uppercase">Customer-Centric Approach</p>
      </div>
      <div className="text-center">
        <h4 className="text-3xl font-bold" style={{ color: '#CF8700' }}>
          20+
        </h4>
        <p className="text-sm text-gray-600 uppercase">Countries Served</p>
      </div>
      <div className="text-center">
        <h4 className="text-3xl font-bold" style={{ color: '#CF8700' }}>
          100%
        </h4>
        <p className="text-sm text-gray-600 uppercase">Sustainable Practices</p>
      </div>
    </div>
  </div>

  {/* Factory Image - Right */}
  <div 
    className="absolute overflow-hidden shadow-lg"
    style={{
      width: '366px',
      height: '355px',
      top: '32px',
      left: '700px',
      borderRadius: '8px'
    }}
  >
    <img
      src="/assets/aboutus/exterior/image 5.png"
      alt="Factory Exterior"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </div>
  </div>

    
    </section>
  );
};

export default About;