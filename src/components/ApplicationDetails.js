import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import Timeline from './Timeline';
//import './button.css';
import '../index.css';

const ApplicationDetails = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(1);

  const [title, setTitle] = useState( '');
  const [name, setName] = useState( '');
  const [adharNumber, setAdharNumber] = useState( '');
  const [fatherHusbandName, setFatherHusbandName] = useState( '');
  const [mobileNumber, setMobileNumber] = useState( '');
  const [emailAddress, setEmailAddress] = useState( '');

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(2);
    
    
    // Form Validation
   /* if (!validateForm()) {
      return;
    }*/

    

    // Redirect to the next page

   
    
    history.push('/address-contact');
  };

 /* const validateForm = () => {
    // Implement form validation logic here
    
    // Check if Aadhar number is exactly 12 digits
    if (adharNumber.length !== 12 || !/^\d+$/.test(adharNumber)) {
      alert('Please enter a valid 12-digit Aadhar number.');
      return false;
    }

    // Check if mobile number is exactly 10 digits
    if (mobileNumber.length !== 10 || !/^\d+$/.test(mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    // Add more validation checks for other fields as needed
    
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
     <Timeline activeStep={activeStep} />{/* Pass activeStep prop */}
     
     
      
      <form style={styles.form} >
        <div style={styles.formRow}>

          <label style={styles.label}>Title:</label>
          <select
            style={styles.select}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Full Name:</label>
          <input
            style={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Adhar Number:</label>
          <input
            style={styles.input}
            type="text"
            value={adharNumber}
            onChange={(e) => setAdharNumber(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Father/Husband Name:</label>
          <input
            style={styles.input}
            type="text"
            value={fatherHusbandName}
            onChange={(e) => setFatherHusbandName(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
        <label style={styles.label}>Mobile Number:</label>
        <input
          style={styles.input}
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          //required
        />
        </div>

        <div style={styles.formRow}>
        <label style={styles.label}>Email Address:</label>
        <input
          style={styles.input}
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          //required
        />
        </div>

        <button className="submit-bar SubmitBarInCardInDesktopView"  type="button" onClick={handleNextClick}>
        
          <header>Next</header>

        </button>
      </form>
    </div>
    
  ); 
      
};

export default ApplicationDetails;