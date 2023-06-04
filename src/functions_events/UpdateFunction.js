import React from 'react';
import { updatekey } from '../data/database.js';

const SubmitChangesButton = ({ data, formData }) => {
  const submitChanges = () => {
    const updatedData = {
      ...data,
      growth_days: parseInt(formData.growth_days),
      day_light_integral: parseFloat(formData.day_light_integral),
      cutting_height: parseFloat(formData.cutting_height),
      yield: parseFloat(formData.yield),
      image: formData.image
    };

    updatekey(data.substrate_id, updatedData)
      .then(() => {
        console.log('Data updated successfully!');
        window.location.reload(); // Reload the app 
      })
      .catch((error) => {
        console.log('Error updating data', error);
        // Handle any errors that occur during update
      });
  };

  return (
    <button type="button" onClick={submitChanges}>
      Update Form
    </button>
  );
};

export default SubmitChangesButton;
