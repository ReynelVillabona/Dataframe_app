import React, { useState, useEffect } from 'react';
import SubmitChangesButton from '../functions_events/UpdateFunction.js';
import AddButton from '../functions_events/SubmitFunction.js';  
import { handleInputChange } from '../functions_events/CurrentChangesFunction.js';

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
      <div>
        <label htmlFor="substrate_id">Substrate ID:</label>       
        <input
          type="number"
          id="substrate_id"
          name="substrate_id"
          value={formData.substrate_id}
          onChange={(event) => handleInputChange(event, formData, setFormData)}

        />
      </div>
      <div>     
        <label htmlFor="growth_days">Growth Days:</label>
        <input
          type="number"
          id="growth_days"
          name="growth_days"
          value={formData.growth_days}
          onChange={(event) => handleInputChange(event, formData, setFormData)}
        />
      </div>
      <div>
        <label htmlFor="day_light_integral">Day Light Integral:</label>
        <input
          type="number"
          id="day_light_integral"
          name="day_light_integral"
          value={formData.day_light_integral}
          onChange={(event) => handleInputChange(event, formData, setFormData)}
        />
      </div>
      <div>
        <label htmlFor="cutting_height">Cutting Height:</label>
        <input
          type="number"
          id="cutting_height"
          name="cutting_height"
          value={formData.cutting_height}
          onChange={(event) => handleInputChange(event, formData, setFormData)}
        />
      </div>
      <div>
        <label htmlFor="yield">Yield:</label>
        <input
          type="number"
          id="yield"
          name="yield"
          value={formData.yield}
          onChange={(event) => handleInputChange(event, formData, setFormData)}
        />
      </div>
      <div>
        <label htmlFor="image">Plant Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={(event) => handleInputChange(event, formData, setFormData)}
        />
      </div>
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
