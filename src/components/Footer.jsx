import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background-overlay">
        <div className="footer-content-container">
          <div className="footer-content">
            {/* Company Info Section */}
            <div className="company-section">
              <div className="company-logo">
                <div className="logo-icon">📐</div>
                <h3>RAJ MICRON PRIVATE LIMITED</h3>
              </div>
              <div className="company-details">
                <p><span className="location-icon">📍</span> Bidiyad, Parbatsar (Raj.)</p>
                <p><span className="gst-icon">🏢</span> GST NO : 08AANCR8385B1ZY</p>
              </div>
              <div className="company-description">
                <p>At Raj Micron Private Limited, we specialize in the production of Natural Ground Calcium Carbonate (GCC) and Precipitated Calcium Carbonate (PCC). With a focus on quality, sustainability, and innovation, we deliver premium GCC and PCC products that meet the diverse needs of industries worldwide.</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link linkedin">in</a>
                <a href="#" className="social-link facebook">f</a>
                <a href="#" className="social-link youtube">▶</a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="quick-links-section">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#particle-size">Particle Size</a></li>
                <li><a href="#products">Our Products</a></li>
                <li><a href="#why-choose">Why Choose Us ?</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ's</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
              <h4>CONTACT US</h4>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h5>Phone Number</h5>
                  <p>+91 9929702991</p>
                  <p>+91 9928157901</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h5>Email Address</h5>
                  <p>rajmicronpvtltd@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h5>Registered Address</h5>
                  <p>E-203A Riico Industrial Area,</p>
                  <p>Bidiyad, Parbatsar (Raj.)</p>
                  <p>341542</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookies</a>
            </div>
            <div className="copyright">
              <p>© 2025. Rajmicron Private Limited. All rights reserved.</p>
            </div>
            <div className="developer-credit">
              <p>Design and Developed by <span className="lunar-edge">LunarEdge</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
