import React from 'react';
import "../styles/LandingPage.css";
import Footer from './Footer';
import Article from './Article';
import Navbar from './Navbar';
import Hero from './Hero';
import Testimonial from './Testinomial';
import DiagnosticAnalysis from './DiagnosticAnalysis';
import ProgramDirectory from './ProgramDirectory';


const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <Navbar />
            <Hero />
            <DiagnosticAnalysis/>
            <ProgramDirectory/>
            <Article />
            <Testimonial />
            <Footer />
        </div>
    );
};
export default LandingPage;
