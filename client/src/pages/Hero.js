import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/doctor.png";
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Find the Right Doctor for Your Health Needs</h1>
          <p>Book your appointments online and get personalized care from experienced doctors.</p>
          <a className="cta-button" href="#">
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Appointment
            </Link>
          </a>
        </div>
        <div className="hero-image">
          {/* <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwYW5kJTIwcGF0aWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Doctor and Patient" /> */}
          <img src={image} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
