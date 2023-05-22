import React, { useState } from 'react';
import { addNewRow } from '../data/database.js';

const AddNewRowForm = () => {
  const [formData, setFormData] = useState({
    substrate_id: '',
    growth_days: '',
    day_light_integral: '',
    cutting_height: '',
    yield: '',
    image: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newRowData = {
      substrate_id: parseInt(formData.substrate_id),
      growth_days: parseFloat(formData.growth_days),
      day_light_integral: parseFloat(formData.day_light_integral),
      cutting_height: parseFloat(formData.cutting_height),
      yield: parseFloat(formData.yield),
      image: formData.image,
    };

    addNewRow(newRowData)
      .then(() => {
        console.log('New row added successfully!');
        window.location.reload(); // Reload the app 
      })
      .catch((error) => {
        console.log('Error adding new row', error);
        // Handle any errors that occur during insertion
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="substrate_id">Substrate ID:</label>
        <input
          type="number"
          id="substrate_id"
          name="substrate_id"
          value={formData.substrate_id}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="growth_days">Growth Days:</label>
        <input
          type="number"
          id="growth_days"
          name="growth_days"
          value={formData.growth_days}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="day_light_integral">Day Light Integral:</label>
        <input
          type="number"
          id="day_light_integral"
          name="day_light_integral"
          value={formData.day_light_integral}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="cutting_height">Cutting Height:</label>
        <input
          type="number"
          id="cutting_height"
          name="cutting_height"
          value={formData.cutting_height}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="yield">Yield:</label>
        <input
          type="number"
          id="yield"
          name="yield"
          value={formData.yield}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="image">Plant Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add New Row</button>
    </form>
  );
};

export default AddNewRowForm;
