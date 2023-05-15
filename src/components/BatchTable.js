import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow.js";
import BatchSelected from "./Batchselected.js";

const BatchTable = ({ keyOptions }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  const handleSelectionId = (selectedValue) => {
    setSelectedSubstrateId(selectedValue);
  };

  


  console.log("selectedSubstrateId tablaaa:", selectedSubstrateId);
  console.log("typeof selectedSubstrateId tablaaa:", typeof selectedSubstrateId);


  console.log("keysssss in tableee:", keyOptions);
  console.log("keysss   table:", typeof keyOptions);

  const columnNames = ["Substrate ID", "Growth Days", "Day Light Integral", "Cutting Height", "Yield", "Plant Image"];

  return (
    <div>
      <BatchSelected SelectionId={handleSelectionId} keyOptions={keyOptions} />
      <table>
        <thead>
          <tr>
            {columnNames.map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {selectedSubstrateId === ""
            ? keyOptions.map((batch) => (
                <BatchTableRow substrateId={parseInt(batch)} key={batch} />
              ))
            : <BatchTableRow substrateId={parseInt(selectedSubstrateId)} />}
        </tbody>
      </table>
    </div>
  );
};

export default BatchTable;
