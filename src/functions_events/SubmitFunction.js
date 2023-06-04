import React from 'react';
import { addNewRow } from '../data/database.js';

const AddButton = ({ formData }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    addNewRow(formData)
      .then(() => {
        console.log('New row added successfully!');
        window.location.reload(); // Reload the app 
      })
      .catch((error) => {
        console.log('Error adding new row', error);
      });
  };

  return (
    <button type="submit" onClick={handleFormSubmit}>
      Add New Row
    </button>
  );
};

export default AddButton;
