import React from 'react';
import '../styles/Testinomial.css';

const Testimonial = () => {
    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            photo: 'https://source.unsplash.com/1600x1600/?person',
            statement: 'I received exceptional care and treatment from the doctors at HealthCare. Highly recommended!',
        },
        {
            id: 2,
            name: 'Jane Smith',
            photo: 'https://source.unsplash.com/1600x1600/?portrait',
            statement: 'The emergency services at HealthCare were prompt and efficient. I\'m grateful for their assistance.',
        },
        {
            id: 3,
            name: 'David Johnson',
            photo: 'https://source.unsplash.com/1600x1600/?people',
            statement: 'The inpatient services provided by HealthCare were top-notch. The staff was caring and attentive.',
        },
        {
            id: 4,
            name: 'Emily Brown',
            photo: 'https://source.unsplash.com/1600x1600/?person',
            statement: 'HealthCare exceeded my expectations with their personalized approach to patient care. Thank you!',
        },
    ];

    return (
        <div className="testimonial-section">
            <h2>What Our Patients Say</h2>
            <div className="testimonial-container">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <img className="profile-photo" src={testimonial.photo} alt="Profile" />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.statement}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
