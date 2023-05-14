import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="landing-page-navbar">
      <div className="landing-page-logo">Doc-Xpert</div>
      <ul className="landing-page-navlinks">
        <li className="landing-page-navlink">
          <Link to="/about">About Us</Link>
        </li>
        <li className="landing-page-navlink">
          <Link to="/services">Services</Link>
        </li>
        <li className="landing-page-navlink">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="landing-page-navlink">
          <Link to="/login">Login/Sign-up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
