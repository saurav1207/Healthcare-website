import React from 'react';
import '../styles/Services.css';

const ServicePage = () => {
  return (
    <div className="service-page">
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="service">
          <img
            src="https://img.icons8.com/office/80/000000/medical-doctor.png"
            alt="Doctor"
          />
          <h3>Consultations</h3>
          <p>
            Our inpatient services are designed to provide a comfortable and safe environment for patients to recover from illness or injury.
          </p>
        </div>
        <div className="service">
          <img
            src="https://img.icons8.com/office/80/000000/hospital-bed.png"
            alt="First Aid Kit"
          />
          <h3>Emergency Services</h3>
          <p>
            Our inpatient services are designed to provide a comfortable and safe environment for patients to recover from illness or injury.
          </p>
        </div>
        <div className="service">
          <img
            src="https://img.icons8.com/office/80/000000/hospital-bed.png"
            alt="Hospital Bed"
          />
          <h3>Inpatient Services</h3>
          <p>
            Our inpatient services are designed to provide a comfortable and safe environment for patients to recover from illness or injury.
          </p>
        </div>
      </div>
      <div className="service-details">
        <h3>Why Choose Our Services?</h3>
        <p>
          Your visitors come to your healthcare website looking for a solution to their problem, and they want to know if your services can address their requirements.
        </p>
        <p>
          If you have more than one service, we believe in providing each service its own dedicated page, allowing for focused content to promote your offerings. We want to give potential patients all the information they need to make an informed decision on whether or not you are the right choice for them. The more you tell, the more patients you will attract.
        </p>
        <p>
          Our goal is to establish our credibility as a legitimate medical practice worthy of consideration. We are committed to providing high-quality care and creating a comfortable environment for our patients to recover and heal.
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
