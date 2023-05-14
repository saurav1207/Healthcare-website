// ProgramDirectory.js

import React, { useState } from 'react';
import '../styles/ProgramDirectory.css';

const ProgramDirectory = () => {
  const programs = [
    {
      name: 'Ayushman Bharat',
      description:
        'Ayushman Bharat is a flagship program of the Government of India that aims to provide health coverage to economically vulnerable sections of the society.',
    },
    {
      name: 'Janani Suraksha Yojana',
      description:
        'Janani Suraksha Yojana is a scheme that provides financial assistance to pregnant women for accessing quality healthcare services during childbirth.',
    },
    {
      name: 'National Health Mission',
      description:
        'The National Health Mission (NHM) focuses on improving healthcare infrastructure, reducing maternal and child mortality, and providing essential healthcare services across India.',
    },
    // Add more healthcare programs as needed
  ];

  const [expandedProgram, setExpandedProgram] = useState(null);

  const handleProgramClick = (index) => {
    setExpandedProgram(index === expandedProgram ? null : index);
  };

  return (
    <div className="program-directory">
      <h2 className="program-directory-heading">Some Schemes Provided Government of India</h2>
      <ul className="program-list">
        {programs.map((program, index) => (
          <li
            key={index}
            className={expandedProgram === index ? 'expanded' : ''}
            onClick={() => handleProgramClick(index)}
          >
            <span className="program-name">{program.name}</span>
            {expandedProgram === index && (
              <span className="program-description">{program.description}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramDirectory;
