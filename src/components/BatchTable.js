import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow.js";
import BatchSelected from "./Batchselected.js";

const BatchTable = () => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  const handleSelectionId = (selectedValue) => {
    setSelectedSubstrateId(selectedValue);
  };

  const columnNames = ["Substrate ID", "Growth Days", "Day Light Integral", "Cutting Height", "Yield", "Plant Image"];

  return (
    <div>
      <BatchSelected SelectionId={handleSelectionId} />
      <table>
        <thead>
          <tr>
            {columnNames.map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedSubstrateId && <BatchTableRow substrateId={parseInt(selectedSubstrateId)} />}
        </tbody>
      </table>
    </div>
  );
};

export default BatchTable;
