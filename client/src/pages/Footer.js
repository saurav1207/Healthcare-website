import React from 'react';
import '../styles/Footer.css'


const Footer = () => {
  return (
    <footer className="footer-page">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Get in Touch</h2>
          <p className="footer-text">If you have any questions or would like to know more about our services, please don't hesitate to get in touch.</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              <p className="footer-item-text">JECRC College, Jaipur, Rajasthan 302022</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-phone-alt footer-icon"></i>
              <p className="footer-item-text">(+91) 8340616725</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-envelope footer-icon"></i>
              <p className="footer-item-text">info@healthcare-website.com</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
