import React, { useState, useEffect } from 'react';
import { addNewRow, updatekey } from '../data/database.js';

const AddNewRowForm = ({data}) => {
  const initialFormData = {
    substrate_id: '',
    growth_days: '',
    day_light_integral: '',
    cutting_height: '',
    yield: '',
    image: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [FormModified, setFormModified] = useState(false);

  useEffect(() => {
  const isSubstrateIdEqual = formData.substrate_id === data.substrate_id;
  const isSubstrateIdEmpty = !formData.substrate_id;

  const isAllFieldsEqual = Object.keys(formData).every((key) => formData[key] === data[key]);

  setFormModified( isSubstrateIdEqual && !isAllFieldsEqual && !isSubstrateIdEmpty);
}, [formData, data]);




  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleClearForm = () => {
      setFormModified(false);
      setFormData(initialFormData);
};

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
        console.log('data updated successfully!');
        window.location.reload(); // Reload the app 
      })
      .catch((error) => {
        console.log('Error adding new row', error);
        // Handle any errors that occur during insertion
      });
};


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let parsedValue = value;

  if (['substrate_id', 'growth_days', 'day_light_integral', 'cutting_height', 'yield'].includes(name)) {
    parsedValue = parseFloat(value);
    if (Number.isNaN(parsedValue)) {
      parsedValue = '';
    }
  }

  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: parsedValue,
  }));
};

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
      <button type="button" onClick={handleClearForm}>Clear Form</button>
      {FormModified && (
  <button type="button" onClick={submitChanges}>
    Update Form
  </button>
  
)}

{/* <pre>
  {Object.entries(formData).map(([key, value]) => (
    <div key={key}>
      {key}: {value} (Type: {typeof value})
    </div>
  ))}
</pre> */}





    </form>
  );
};

export default AddNewRowForm;
