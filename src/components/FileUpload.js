import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';

const FileUpload = () => {
    const history = useHistory();
    const [activeStep, setActiveStep] = useState(4);
  
    // Provide default values to avoid "no-unused-vars" warning
    const [userPicture, setUserPicture] = useState(null);
    const [petPicture, setPetPicture] = useState(null);
    const [adharPicture, setAdharPicture] = useState(null);
    const [vaccinationPicture, setVaccinationPicture] = useState(null);

  const handleUserPictureChange = (event) => {
    setUserPicture(event.target.files[0]);
  };

  const handleVaccinationPictureChange = (event) => {
    setVaccinationPicture(event.target.files[0]);
  };

  const handlePetPictureChange = (event) => {
    setPetPicture(event.target.files[0]);
  };

  const handleAdharPictureChange = (event) => {
    setAdharPicture(event.target.files[0]);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(4); // Change this line to set activeStep to 4

    // Update the formData with the uploaded files

    // Redirect to the next page
    history.push('/review');

    console.log('User Picture:', userPicture);
    console.log('Pet Picture:', petPicture);
    console.log('Adhar Card Picture:', adharPicture);
    console.log('Vaccination Certificate:', vaccinationPicture);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '115vh',
      background: '#f1f1f1',
      padding: '20px',
      overflow: 'auto',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      width: '100%',
      maxWidth: '600px',
      padding: '25px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    formRow: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    label: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
    },
    select: {
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <Timeline activeStep={activeStep} />
      <form style={styles.form} >
        <div style={styles.formRow}>
          <label style={styles.label}>Upload Your Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handleUserPictureChange}
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Pet Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handlePetPictureChange}
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Aadhar Card Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*, application/pdf"
            onChange={handleAdharPictureChange}
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Vaccination Certificate:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*, application/pdf"
            onChange={handleVaccinationPictureChange}
            required
          />
        </div>

        <button className="submit-bar SubmitBarInCardInDesktopView"  type="button" onClick={handleNextClick}>
        
          <header>Next</header>

        </button>
      </form>
    </div>
  );
};

export default FileUpload;