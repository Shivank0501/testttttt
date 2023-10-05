import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
//import './Timeline.css';

const PetDetailPage = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(3);


  const [petType, setPetType] = useState('');
  const [petName, setPetName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [lastVaccinatedDate, setLastVaccinatedDate] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorPhoneNumber, setDoctorPhoneNumber] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');

  const [breedOptions, setBreedOptions] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState( '');

  const handlePetTypeChange = (e) => {
    setPetType(e.target.value);
    setSelectedBreed('');

    if (e.target.value === 'dog') {
      setBreedOptions([
        'Labrador Retriever',
        'German Shepherd',
        'Golden Retriever',
        // Add more dog breeds here
      ]);
    } else if (e.target.value === 'cat') {
      setBreedOptions([
        'Bombay Cat',
        'Himalayan Cat',
        'Siamese Cat',
        // Add more cat breeds here
      ]);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(4);   // applied same logic here for all pages


    /*if (!validateForm()) {
      return;
    }*/
    // Handle form submission logic here

    
    history.push('/file-upload');
  };

  /*const validateForm = () => {

     if (doctorPhoneNumber.length !== 10 || !/^\d+$/.test(doctorPhoneNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    return true;
  }*/

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
     {/* <h2 style={styles.heading}>Pet Details</h2>*/}
      <form style={styles.form} >
        <div style={styles.formRow}>
          <label style={styles.label}>Pet Type:</label>
          <select
            style={styles.select}
            value={petType}
            onChange={handlePetTypeChange}
           // required
          >
            <option value="">Select Pet Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        {petType && (
          <div style={styles.formRow}>
            <label style={styles.label}>Breed:</label>
            <select
              style={styles.select}
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              //required
            >
              <option value="">Select Breed</option>
              {breedOptions.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
        )}

        <div style={styles.formRow}>
          <label style={styles.label}>Pet Name:</label>
          <input
            style={styles.input}
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
           // required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Sex:</label>
          <select
            style={styles.select}
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            //required
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Age :</label>
          <input
            style={styles.input}
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Purchase Date:</label>
          <input
            style={styles.input}
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Last Vaccinated Date:</label>
          <input
            style={styles.input}
            type="date"
            value={lastVaccinatedDate}
            onChange={(e) => setLastVaccinatedDate(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Name:</label>
          <input
            style={styles.input}
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Phone Number:</label>
          <input
            style={styles.input}
            type="tel"
            value={doctorPhoneNumber}
            onChange={(e) => setDoctorPhoneNumber(e.target.value)}
           // required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Email:</label>
          <input
            style={styles.input}
            type="email"
            value={doctorEmail}
            onChange={(e) => setDoctorEmail(e.target.value)}
           // required
          />
        </div>

        <button className="submit-bar SubmitBarInCardInDesktopView"  type="button" onClick={handleNextClick}>
        
          <header>Next</header>

        </button>
      </form>
    </div>
  );
};

export default PetDetailPage;