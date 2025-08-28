import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Youtube,
  CheckCircle2 as Verified,
} from "lucide-react";

const Footer = () => {
  const [imgError, setImgError] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative text-whiterelative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
      style={{
        backgroundImage: "url(/assets/footer/bgfooter.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Mobile fallback: disable fixed bg on mobile */}
      <style>{`
        @media (max-width: 768px) {
          footer[style*="background-attachment"] { background-attachment: scroll !important; }
        }
      `}</style>

      {/* Overlay */}
      
<div className="absolute inset-0 bg-[#222429cc]"></div>

      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Left: Logo + Info */}
          <div className="min-w-[250px]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 gap-3 mb-5">
              <div className="w-16 h-16 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/assets/logo/Untitled design (27) 1.png"
                    alt="Raj Micron Logo"
                    className="w-full h-full object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-teal-500 font-bold text-2xl">RM</span>
                )}
              </div>

              <div className="min-w-0">
                <h1
                  className="text-xl lg:text-4xl font-medium uppercase tracking-wide leading-tight text-white"
                  style={{ fontFamily: "Teko, sans-serif" }}
                >
                  RAJ MICRON PRIVATE LIMITED
                </h1>

                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-300 text-sm gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="truncate">Bidiyad, Parbatsar (Raj.)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Verified className="w-4 h-4 text-green-400" />
                    <span className="truncate text-xs sm:text-sm">
                      GST NO : 08AANCRB385B1ZY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              At Raj Micron Private Limited, we specialize in the production of Natural Ground Calcium Carbonate (GCC) and Precipitated Calcium Carbonate (PCC). With a focus on quality, sustainability, and innovation, we deliver premium GCC and PCC products that meet the diverse needs of industries worldwide.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-[#0A66C2] hover:opacity-90 grid place-items-center"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-[#1877F2] hover:opacity-90 grid place-items-center"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-[#FF0000] hover:opacity-90 grid place-items-center"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-yellow-400 font-bold text-lg mb-5 tracking-wide">
              QUICK LINKS
            </h3>
            <nav className="space-y-3">
              {[
                "About Us",
                "Particle Size",
                "Our Products",
                "Why Choose Us ?",
                "Industries",
                "Services",
                "Process",
                "Testimonials",
                "FAQ's",
              ].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-5 tracking-wide">
              CONTACT US
            </h3>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="font-semibold">Phone Number</span>
              </div>
              <div className="ml-8 text-sm text-gray-300 space-y-1">
                <div>+91 9929702991</div>
                <div>+91 9928157991</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="font-semibold">Email Address</span>
              </div>
              <div className="ml-8 text-sm text-gray-300">
                Rajmicronpvtltd@gmail.com
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="font-semibold">Registered Address</span>
              </div>
              <div className="ml-8 text-sm text-gray-300">
                E-203A, RIICO Industrial Area,
                <br />
                Bidiyad, Parbatsar (Raj.)
                <br />
                341542
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-300">

    {/* Links */}
    <div className="flex gap-x-6">
      {["Terms & Conditions", "Privacy Policy", "Cookies"].map((l) => (
        <a
          key={l}
          href="#"
          className="hover:text-white transition-colors"
        >
          {l}
        </a>
      ))}
    </div>

    {/* Single-line text */}
    <div className="flex items-center gap-2 text-gray-300">
      <span>© 2025 Rajmicron Private Limited. All rights reserved.</span>
      <span>|</span>
      <span>
        Design & Developed by{" "}
        <span className="text-red-400 font-semibold">LunarEdge</span>
      </span>
    </div>
    
  </div>
</div>
      </div>

      {/* Scroll-to-top */}
      <button
        onClick={handleScrollTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#CF8700] text-gray-900 shadow-lg hover:bg-yellow-500 transition-colors grid place-items-center"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
