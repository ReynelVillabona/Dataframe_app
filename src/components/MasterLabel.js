import React from 'react';
import InputLabel from './InputLabel.js';
import { handleInputChange } from '../functions_events/CurrentChangesFunction.js';


const FormField = ({ htmlFor, label, value, type_input , formData,setFormData }) => {
  
  return (
    <div>
      <InputLabel htmlFor={htmlFor} text={label} />
      <input
        type={type_input}
        id={htmlFor}
        name={htmlFor}
        value={value}
        onChange={(event) => handleInputChange(event, formData, setFormData)}
      />
    </div>
  );
};

export default FormField;
