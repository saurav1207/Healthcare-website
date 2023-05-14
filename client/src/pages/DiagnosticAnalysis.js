import React, { useState } from 'react';
import '../styles/DiagnosticAnalysis.css'; // Import the CSS file for styling

const DiagnosticAnalysis = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [diagnosisResult, setDiagnosisResult] = useState('');
    const [homeRemedies, setHomeRemedies] = useState([]);
    const [showRecommendation, setShowRecommendation] = useState(false);

    const handleSymptomChange = (e) => {
        const selectedSymptom = e.target.value;
        const isChecked = e.target.checked;

        // Update the symptoms array based on the checkbox selection
        setSymptoms((prevSymptoms) => {
            if (isChecked) {
                // Add the selected symptom
                return [...prevSymptoms, selectedSymptom];
            } else {
                // Remove the deselected symptom
                return prevSymptoms.filter((symptom) => symptom !== selectedSymptom);
            }
        });
    };

    const handleDiagnose = () => {
        const result = diagnoseDisease(symptoms);
        setDiagnosisResult(result);

        // Generate and set home remedies based on the diagnosis
        const remedies = generateHomeRemedies(result);
        setHomeRemedies(remedies);

        // Show the recommendation if no remedies are available
        setShowRecommendation(remedies.length === 0);
    };

    // Uncheck all checkboxes
    // const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // checkboxes.forEach((checkbox) => {
    //     checkbox.checked = false;
    // });


    const handleClear = () => {
        setSymptoms([]);
        setDiagnosisResult('');
        setHomeRemedies([]);
        setShowRecommendation(false);
    };


    const diagnoseDisease = (selectedSymptoms) => {
        if (selectedSymptoms.includes('Headache')) {
            return 'Headache';
        } else if (selectedSymptoms.includes('Sore throat')) {
            return 'Sore throat';
        } else if (selectedSymptoms.includes('Cough')) {
            return 'Cough';
        } else if (selectedSymptoms.includes('Fever')) {
            return 'Fever';
        } else if (selectedSymptoms.includes('Stomachache')) {
            return 'Stomachache';
        }

        return 'No disease selected';
    };


    const generateHomeRemedies = (diagnosis) => {
        let remedies = [];

        switch (diagnosis) {
            case 'Headache':
                remedies = [
                    'Take a break and rest in a quiet room.',
                    'Apply a cold or warm compress to the forehead or neck.',
                    'Drink plenty of water to stay hydrated.',
                    'Avoid bright lights and loud noises.',
                    'Take over-the-counter pain relievers as directed.',
                ];
                break;
            case 'Sore throat':
                remedies = [
                    'Gargle with warm salt water.',
                    'Drink warm liquids like herbal tea or soup.',
                    'Suck on lozenges or hard candies.',
                    'Avoid irritants like smoking or exposure to secondhand smoke.',
                    'Get plenty of rest and stay hydrated.',
                ];
                break;
            case 'Cough':
                remedies = [
                    'Stay hydrated by drinking plenty of fluids.',
                    'Use a humidifier or take a steamy shower to soothe the airways.',
                    'Take over-the-counter cough medicine as directed.',
                    'Avoid exposure to irritants like smoke or strong odors.',
                    'Get enough rest to support the immune system.',
                ];
                break;
            case 'Fever':
                remedies = [
                    'Get plenty of rest and stay hydrated.',
                    'Take over-the-counter fever reducers like acetaminophen or ibuprofen.',
                    'Apply a cool compress to help reduce body temperature.',
                    'Dress in lightweight clothing to aid in cooling down.',
                    'Monitor body temperature and seek medical attention if necessary.',
                ];
                break;
            case 'Stomachache':
                remedies = [
                    'Drink clear fluids like water or herbal tea.',
                    'Eat small, bland meals to avoid further irritation.',
                    'Avoid greasy, spicy, or fatty foods.',
                    'Apply a heating pad or take a warm bath to ease discomfort.',
                    'Take over-the-counter antacids or digestive aids as directed.',
                ];
                break;
            default:
                break;
        }

        return remedies;
    };
    return (
        <div className="diagnostic-analysis-container">
            <h2 className="diagnostic-analysis-title">Diagnostic Analysis</h2>

            <div className="diagnostic-analysis-flex">
                <div className="diagnostic-analysis-left">
                    <p className="symptom-description">Select your symptoms:</p>
                    <label className="symptom-label">
                        <input
                            type="checkbox"
                            value="Headache"
                            onChange={handleSymptomChange}
                        />
                        Headache
                    </label>
                    <br />
                    <label className="symptom-label">
                        <input
                            type="checkbox"
                            value="Sore throat"
                            onChange={handleSymptomChange}
                        />
                        Sore throat
                    </label>
                    <br />
                    <label className="symptom-label">
                        <input
                            type="checkbox"
                            value="Cough"
                            onChange={handleSymptomChange}
                        />
                        Cough
                    </label>
                    <br />
                    <label className="symptom-label">
                        <input
                            type="checkbox"
                            value="Fever"
                            onChange={handleSymptomChange}
                        />
                        Fever
                    </label>
                    <br />
                    <label className="symptom-label">
                        <input
                            type="checkbox"
                            value="Stomachache"
                            onChange={handleSymptomChange}
                        />
                        Stomachache
                    </label>
                    <br />

                    <button className="diagnose-button" onClick={handleDiagnose}>
                        Diagnose
                    </button>
                    <button className="clear-button" onClick={handleClear}>
                        Clear
                    </button>
                </div>

                <div className="diagnostic-analysis-right">
                    <div className="diagnosis-result-container">
                        <p className="diagnosis-result">Diagnosis Result: {diagnosisResult}</p>

                        {homeRemedies.length > 0 && (
                            <div>
                                <h3 className="home-remedies-heading">Home Remedies:</h3>
                                <ul className="home-remedies-list">
                                    {homeRemedies.map((remedy, index) => (
                                        <li key={index}>{remedy}</li>
                                    ))}
                                </ul>
                                <p className="recommendation-text">
                                    *If the home remedies don't work after a few days, it is recommended to consult a doctor for proper treatment.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiagnosticAnalysis;