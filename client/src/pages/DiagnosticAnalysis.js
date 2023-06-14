import React, { useState } from 'react';
import '../styles/DiagnosticAnalysis.css'; // Import the CSS file for styling

const DiagnosticAnalysis = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [diagnosisResult, setDiagnosisResult] = useState('');
    const [homeRemedies, setHomeRemedies] = useState([]);
    const [recommendedDoctors, setRecommendedDoctors] = useState([]);
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

        // Generate and set recommended doctors based on the diagnosis
        const doctors = recommendDoctors(result);
        setRecommendedDoctors(doctors);

        // Show the recommendation if no remedies or doctors are available
        setShowRecommendation(remedies.length === 0 && doctors.length === 0);
    };



    const handleClear = () => {
        setSymptoms([]);
        setDiagnosisResult('');
        setHomeRemedies([]);
        setRecommendedDoctors([]);
        setShowRecommendation(false);
    };

    const diagnoseDisease = (selectedSymptoms) => {
        // Logic for diagnosing diseases based on symptoms
        // Return the diagnosis result based on the selected symptoms

        // Example logic (replace with your own):
        if (selectedSymptoms.includes('Headache')) {
            return 'Migraine';
        } else if (selectedSymptoms.includes('Sore throat')) {
            return 'Strep throat';
        } else if (selectedSymptoms.includes('Cough')) {
            return 'Bronchitis';
        } else if (selectedSymptoms.includes('Fever')) {
            return 'Fever';
        } else if (selectedSymptoms.includes('Stomachache')) {
            return 'Stomachache';
        } else {
            return 'Unknown';
        }

    };

    const generateHomeRemedies = (diagnosis) => {
        // Logic for generating home remedies based on the diagnosis
        // Return an array of home remedies based on the diagnosis

        // Example logic (replace with your own):
        if (diagnosis === 'Migraine') {
            return [
                'Take a break and rest in a quiet room.',
                'Apply a cold or warm compress to the forehead or neck.',
                'Drink plenty of water to stay hydrated.',
                'Avoid bright lights and loud noises.',
                'Take over-the-counter pain relievers as directed.',
            ];
        } else if (diagnosis === 'Strep throat') {
            return [
                'Gargle with warm salt water.',
                'Drink warm liquids like herbal tea or soup.',
                'Suck on lozenges or hard candies.',
                'Avoid irritants like smoking or exposure to secondhand smoke.',
                'Get plenty of rest and stay hydrated.',
            ];
        } else if (diagnosis === 'Bronchitis') {
            return [
                'Stay hydrated by drinking plenty of fluids.',
                'Use a humidifier or take a steamy shower to soothe the airways.',
                'Take over-the-counter cough medicine as directed.',
                'Avoid exposure to irritants like smoke or strong odors.',
                'Get enough rest to support the immune system.',
            ];
        } else if (diagnosis === 'Fever') {
            return [
                'Get plenty of rest and stay hydrated.',
                'Take over-the-counter fever reducers like acetaminophen or ibuprofen.',
                'Apply a cool compress to help reduce body temperature.',
                'Dress in lightweight clothing to aid in cooling down.',
                'Monitor body temperature and seek medical attention if necessary.',
            ];
        } else if (diagnosis === 'Stomachache') {
            return [
                'Drink clear fluids like water or herbal tea.',
                'Eat small, bland meals to avoid further irritation.',
                'Avoid greasy, spicy, or fatty foods.',
                'Apply a heating pad or take a warm bath to ease discomfort.',
                'Take over-the-counter antacids or digestive aids as directed.',
            ];
        } else {
            return [];
        }

    };

    const recommendDoctors = (diagnosis) => {
        // Logic for recommending doctors based on the diagnosis
        // Return an array of recommended doctors based on the diagnosis

        // Example logic (replace with your own):
        if (diagnosis === 'Migraine') {
            return [
                { name: 'Dr. John Smith', specialty: 'Neurology' },
                { name: 'Dr. Emily Johnson', specialty: 'Headache Specialist' },
            ];
        } else if (diagnosis === 'Strep throat') {
            return [
                { name: 'Dr. Sarah Davis', specialty: 'Ear, Nose, and Throat' },
                { name: 'Dr. Michael Thompson', specialty: 'Infectious Diseases' },
            ];
        } else if (diagnosis === 'Bronchitis') {
            return [
                { name: 'Dr. James Anderson', specialty: 'Pulmonology' },
                { name: 'Dr. Laura Wilson', specialty: 'Respiratory Medicine' },
            ];
        } else if (diagnosis === 'Fever') {
            return [
                { name: 'Dr. Rebecca Johnson', specialty: 'Internal Medicine' },
                { name: 'Dr. Andrew Lee', specialty: 'Family Medicine' },
            ];
        } else if (diagnosis === 'Stomachache') {
            return [
                { name: 'Dr. Lisa Roberts', specialty: 'Gastroenterology' },
                { name: 'Dr. Mark Thompson', specialty: 'Internal Medicine' },
            ];
        } else {
            return [];
        }
    };

    return (
        <div className="diagnostic-analysis-container">
            <h2 className="diagnostic-analysis-title">Diagnostic Analysis</h2>

            <div className="diagnostic-analysis-flex">
                <div className="diagnostic-analysis-left">
                    {/* <p className="symptom-description">Select your symptoms:</p> */}
                    <h3 className="symptom-description">Symptoms:</h3>
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

                {/* <div className="diagnostic-analysis-right">
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
                        {recommendedDoctors.length > 0 && (
                            <div>
                                <h3 className="doctor-recommendation-heading">Doctor Recommendations:</h3>
                                <ul className="doctor-recommendation-list">
                                    {recommendedDoctors.map((doctor, index) => (
                                        <li key={index}>{doctor.name} - {doctor.specialty}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {showRecommendation && homeRemedies.length === 0 && recommendedDoctors.length === 0 && (
                            <p className="no-recommendation-text">No specific recommendations found based on the selected symptoms.</p>
                        )}
                    </div>
                </div> */}

                <div className="diagnostic-analysis-flex">
                    <div className="diagnostic-analysis-left">
                        <div className="diagnosis-result-container">
                            {/* <p className="diagnosis-result">Diagnosis Result: {diagnosisResult}</p> */}

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
                            {showRecommendation && homeRemedies.length === 0 && recommendedDoctors.length === 0 && (
                                <p className="no-recommendation-text">No specific recommendations found based on the selected symptoms.</p>
                            )}
                        </div>
                    </div>

                    <div className="diagnostic-analysis-right">
                        <div className="diagnosis-result-container">
                            {recommendedDoctors.length > 0 && (
                                <div>
                                    <h3 className="doctor-recommendation-heading">Doc-Recommendations:</h3>
                                    <ul className="doctor-recommendation-list">
                                        {recommendedDoctors.map((doctor, index) => (
                                            <li key={index}>{doctor.name} - {doctor.specialty}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DiagnosticAnalysis;