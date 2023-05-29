import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow.js";
import BatchSelected from "./Batchselected.js";
import ColumnHeaders from "./ColumnHeaders.js";

const BatchTable = ({ keyOptions }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  const handleSelectionId = (selectedValue) => {
    setSelectedSubstrateId(selectedValue);
  };
  

  const columnNames = ["Substrate ID", "Growth Days", "Day Light Integral", "Cutting Height", "Yield", "Plant Image"];

  return (
    <div>
      <BatchSelected SelectionId={handleSelectionId} keyOptions={keyOptions} />
      <table>
        <ColumnHeaders columnNames={columnNames} />
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
