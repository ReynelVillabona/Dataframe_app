import React, { useState, useEffect } from 'react';
import SubmitChangesButton from '../functions_events/UpdateFunction.js';
import AddButton from '../functions_events/SubmitFunction.js';  
import FormField from './MasterLabel.js';

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

  // conditions to show the update button
  // no equal substrate id
  //no substrate id field empty
  //no all the fields same as recieved in data
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

  return (  
    

    <form>
      <FormField htmlFor="substrate_id" label="Substrate ID:" type="number" value={formData.substrate_id}  formData={formData} setFormData={setFormData} ></FormField>
      <FormField htmlFor="growth_days" label="Growth Days:" type="number" value={formData.growth_days}  formData={formData} setFormData={setFormData} ></FormField>
      <FormField htmlFor="day_light_integral" label="Day Light Integral:" type="number" value={formData.day_light_integral}  formData={formData} setFormData={setFormData} ></FormField>
      <FormField htmlFor="cutting_height" label="Cutting Height:" type="number" value={formData.cutting_height}  formData={formData} setFormData={setFormData} ></FormField>
      <FormField htmlFor="image" label="Plant Image URL:" type="text" value={formData.image}  formData={formData} setFormData={setFormData} ></FormField>    
   
      <AddButton formData={formData} />
      <button type="button" onClick={handleClearForm}>Clear Form</button>
      {FormModified && (
        <SubmitChangesButton data={data} formData={formData} />
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
