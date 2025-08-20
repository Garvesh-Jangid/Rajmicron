import React from 'react';

const Products = () => {
  return (
    <section 
      id="products"
      className="relative overflow-hidden"
      style={{
        background: "#FFF7E9",
        width: "1807px",
        height: "571px",
        borderRadius: "12px",
        opacity: 1,
        position: "absolute",
        top: "837px",
        left: "62px"
      }}
    >
      {/* Content container */}
      <div
        className="relative"
        style={{
          width: "1211px",
          height: "479px",
          position: "absolute",
          top: "43px",
          left: "146px",
          transform: "rotate(0deg)",
          opacity: 1
        }}
      >
        {/* Header with exact typography and positioning */}
        <h2
          style={{
            fontFamily: "Font 1", // Replace with your actual font family
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "90px",
            lineHeight: "63px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            textTransform: "uppercase",
            width: "402px",
            height: "81px",
            position: "absolute",
            top: "43px",
            left: "146px",
            opacity: 1,
            color: "#CF8700",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          OUR PRODUCTS
        </h2>

        {/* Subtitle with exact positioning and typography */}
        <p 
          style={{ 
            fontFamily: "Font 1", // Replace with your actual font family
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "50px",
            lineHeight: "36px",
            letterSpacing: "1.2px", // letter spacing 1_2
            verticalAlign: "middle",
            textTransform: "uppercase",
            width: "1211px",
            height: "36px",
            position: "absolute",
            top: "143px",
            left: "146px",
            opacity: 1,
            color: "#000",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          QUALITY, CONSISTENCY, AND PERFORMANCE IN EVERY PRODUCT WE SUPPLY.
        </p>

        {/* GCC Product Card - Left Position */}
        <div 
          className="text-center absolute"
          style={{
            width: "212px",
            height: "297px",
            top: "225px",
            left: "146px",
            opacity: 1
          }}
        >
          <div 
            className="mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-black"
            style={{
              width: "160px",
              height: "160px",
              filter: "brightness(1.05) contrast(1.1)"
            }}
          >
            <img
              src="/assets/products/Ellipse 7.png"
              alt="Ground Calcium Carbonate (GCC)"
              className="w-full h-full object-cover"
              
            />
          </div>
          <h3 
            style={{
              fontFamily: "Teko, sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "28px",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#000",
              maxWidth: "200px",
              margin: "0 auto"
            }}
          >
            Ground Calcium Carbonate (GCC)
          </h3>
        </div>

        {/* PCC Product Card - Right Position */}
        <div 
          className="text-center absolute"
          style={{
            width: "272px",
            height: "297px",
            top: "225px",
            left: "458px",
            opacity: 1
          }}
        >
          <div 
            className="mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-black"
            style={{
              width: "160px",
              height: "160px",
              filter: "brightness(1.05) contrast(1.1)"
            }}
          >
            <img
              src="/assets/products/Ellipse 8.png" ///assets/images/Image (1).png
              alt="Precipitated Calcium Carbonate (PCC)"
              className="w-full h-full object-cover"
             
            />
          </div>
          <h3 
            style={{
              fontFamily: "Teko, sans-serif",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "28px",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#000",
              maxWidth: "200px",
              margin: "0 auto"
            }}
          >
            Precipitated Calcium Carbonate (PCC)
          </h3>
        </div>
      </div>

      {/* Add Teko font */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />
    </section>
  );
};

export default Products;
