import React, { useState } from "react";

const BatchSelected = ({ SelectionId, keyOptions }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  

  const handleSelection = (event) => {
    const selectedValue = event.target.value;
    setSelectedSubstrateId(selectedValue);
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
