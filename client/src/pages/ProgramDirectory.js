import React, { useState } from 'react';
import '../styles/ProgramDirectory.css';

const ProgramDirectory = () => {
  // Array of healthcare programs
  const programs = [
    {
      name: 'Ayushman Bharat',
      description:
        'Ayushman Bharat is a flagship program of the Government of India that aims to provide health coverage to economically vulnerable sections of the society.',
      details: [
        'Coverage for hospitalization expenses up to ₹5 lakh per family per year',
        'Cashless and paperless transactions at empaneled hospitals',
        'Coverage for pre-existing conditions from day one',
      ],
    },
    {
      name: 'Janani Suraksha Yojana',
      description:
        'Janani Suraksha Yojana is a scheme that provides financial assistance to pregnant women for accessing quality healthcare services during childbirth.',
      details: [
        'Cash assistance for institutional delivery',
        'Free transport to reach the health facility',
        'Free medical care and check-ups during pregnancy',
      ],
    },
    {
      name: 'National Health Mission',
      description:
        'The National Health Mission (NHM) focuses on improving healthcare infrastructure, reducing maternal and child mortality, and providing essential healthcare services across India.',
      details: [
        'Improvement of public health infrastructure',
        'Maternal and child health services',
        'National Urban Health Mission for urban areas',
      ],
    },
    // Add more healthcare programs as needed
  ];

  // State to track the expanded program
  const [expandedProgram, setExpandedProgram] = useState(null);

  // Function to handle program click and expand/collapse the description
  const handleProgramClick = (index) => {
    setExpandedProgram(index === expandedProgram ? null : index);
  };

  return (
    <div className="program-directory">
      <h2 className="program-directory-heading">Schemes Provided by the Government</h2>
      <ul className="program-list">
        {programs.map((program, index) => (
          <li
            key={index}
            className={expandedProgram === index ? 'expanded' : ''}
            onClick={() => handleProgramClick(index)}
          >
            <div className="program-card">
              <div className="program-header">
                <h3 className="program-name">{program.name}</h3>
              </div>
              <div className="program-content">
                <p className="program-description">{program.description}</p>
                {expandedProgram === index && (
                  <>
                    <h4 className="program-details-heading">Program Details:</h4>
                    <ul className="program-details-content">
                      {program.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramDirectory;

