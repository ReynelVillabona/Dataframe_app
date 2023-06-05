export const handleInputChange = (event, formData, setFormData) => {

  // desectructure the event.target object to get properties name and value
  const { name, value } = event.target;

  //initilize the var with the value of the field
  let parsedValue = value;
  console.log("value", value)
  
  //check if the field it is within the fields to be converted
  if (['substrate_id', 'growth_days', 'day_light_integral', 'cutting_height', 'yield'].includes(name)) {
    
    //value is tried to be converted in parsefloat
    parsedValue = parseFloat(value);

    //if results in Nan, then it will send a empty string...to aovid errors
    if (Number.isNaN(parsedValue)) {
      parsedValue = '';
    }
  }
  
  // this is used to keep the values that are not being modified as they are
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: parsedValue,
  }));
};
