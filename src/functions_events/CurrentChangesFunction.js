export const handleInputChange = (event, formData, setFormData) => {
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
