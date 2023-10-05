import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Timeline from './Timeline';

const AddressContactPage = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(2);


  const [houseNumber, setHouseNumber] = useState( '');
  const [streetName, setStreetName] = useState( '');
  const [locality, setLocality] = useState( '');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState( '');
  const [state, setState] = useState( '');
  const [pincode, setPincode] = useState( '');

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(3);  // for the nextpage timeline status 

     // Form Validation
   /* if (!validateForm()) {
      return;
    }*/

    


    // Handle form submission logic here

    // Redirect to the next page

    
    history.push('/pet-details');
  };

  /*const validateForm = () => {
    // Implement form validation logic here
    
    // Check if Aadhar number is exactly 12 digits
    if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      alert('Please enter a valid Pincode');
      return false;
    }
    
    return true;
  };*/

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
          <label style={styles.label}>House Number:</label>
          <input
            style={styles.input}
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Street Name:</label>
          <input
            style={styles.input}
            type="text"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Locality:</label>
          <input
            style={styles.input}
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Landmark:</label>
          <input
            style={styles.input}
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>City:</label>
          <input
            style={styles.input}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>State:</label>
          <input
            style={styles.input}
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Pincode:</label>
          <input
            style={styles.input}
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        <button className="submit-bar SubmitBarInCardInDesktopView"  type="button" onClick={handleNextClick}>
        
          <header>Next</header>

        </button>
      </form>
    </div>
  );
};

export default AddressContactPage;