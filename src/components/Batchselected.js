import React, { useState } from "react";

//receive properties from batch table
const BatchSelected = ({ SelectionId, keyOptions }) => {

  //define state fo the variable handle here
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  
  // here handles the event of the change of the selector
  const handleSelection = (event) => {
    const selectedValue = event.target.value;

    // show value selected in selector
    setSelectedSubstrateId(selectedValue);

    // pass to batch table
    SelectionId(selectedValue);
  };

  console.log("keysssss in batchselecteddd:", keyOptions);
  console.log("keysss   batchselecteddd:", typeof keyOptions);

  return (
    <select value={selectedSubstrateId} onChange={handleSelection}>
      <option value="">All</option>
      {keyOptions.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
};

export default BatchSelected;
