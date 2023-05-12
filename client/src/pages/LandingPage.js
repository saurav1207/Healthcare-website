import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/LandingPage.css";

import image from "../assets/doctor.png";


const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <nav className="landing-page-navbar">
                <div className="landing-page-logo">HealthCare</div>
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
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <div class="hero-section">
                <div class="hero-container">
                    <div class="hero-text">
                        <h1>Find the Right Doctor for Your Health Needs</h1>
                        <p>Book your appointments online and get personalized care from experienced doctors.</p>
                        <a href="#" class="cta-button">
                            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Book Appointment</Link>
                        </a>
                    </div>
                    <div class="hero-image">
                        {/* <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwYW5kJTIwcGF0aWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Doctor and Patient" /> */}
                        <img src={image} alt='doctor image'/>
                    </div>
                </div>
            </div>



            <div className="landing-page-services">
                <h2>Our Services</h2>
                <div className="landing-page-services-container">
                    <div className="landing-page-service">
                        <img
                            src="https://img.icons8.com/office/80/000000/medical-doctor.png"
                            alt="Doctor"
                        />
                        <h3>Consultations</h3>
                        <p>
                            We provide consultations with some of the best doctors in the
                            world to ensure that you receive the best possible care.
                        </p>
                    </div>
                    <div className="landing-page-service">
                        <img
                            src="https://img.icons8.com/office/80/000000/hospital-bed.png"
                            alt="First Aid Kit"
                        />
                        <h3>Emergency Services</h3>
                        <p>
                            We have a team of highly trained professionals that are available
                            24/7 to provide emergency services whenever you need them.
                        </p>
                    </div>
                    <div className="landing-page-service">
                        <img
                            src="https://img.icons8.com/office/80/000000/hospital-bed.png"
                            alt="Hospital Bed"
                        />
                        <h3>Inpatient Services</h3>
                        <p>
                            Our inpatient services are designed to provide a comfortable and
                            safe environment for patients to recover from illness or injury.
                        </p>
                    </div>
                </div>
            </div>

            <footer class="landing-page-footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h2 class="footer-heading">Get in Touch</h2>
                        <p class="footer-text">If you have any questions or would like to know more about our services, please don't hesitate to get in touch.</p>
                    </div>
                    <div class="footer-section">
                        <h2 class="footer-heading">Contact Us</h2>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <i class="fas fa-map-marker-alt footer-icon"></i>
                                <p class="footer-item-text">JECRC College, Jaipur, Rajasthan 302022</p>
                            </li>
                            <li class="footer-list-item">
                                <i class="fas fa-phone-alt footer-icon"></i>
                                <p class="footer-item-text">(+91) 8340616725</p>
                            </li>
                            <li class="footer-list-item">
                                <i class="fas fa-envelope footer-icon"></i>
                                <p class="footer-item-text">info@healthcare-webiste.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default LandingPage;
