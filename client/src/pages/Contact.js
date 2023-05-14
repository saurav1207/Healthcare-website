import React from 'react';
import '../styles/Contact.css'; // Import your custom CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-content-container">
        <div className="contact-form-container">
          <div className="contact-left">
            <h2>Contact Form</h2>
            <p>
              If you have any questions, suggestions, or concerns, please feel free to reach out to us using the contact form below:
            </p>
          </div>
          <form>
            <div className="contact-form-row">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contact-form-row">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form-row">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" cols="50" required></textarea>
            </div>
            <div className="contact-form-row">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
