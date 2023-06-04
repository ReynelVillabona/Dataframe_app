import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow.js";
import BatchSelected from "./Batchselected.js";
import ColumnHeaders from "./ColumnHeaders.js";
import AddNewRowForm from "./AddButton.js";
import Deleterow from "./Deletebutton.js";

import "../styles/styles.css";


const BatchTable = ({ keyOptions }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");
  const [data, setData] = useState(null);


  const handleSelectionId = (selectedValue) => {
    setSelectedSubstrateId(selectedValue);
  };

  const handleDataUpdate = (data) => {
  setData(data);
};
  

  const columnNames = ["Substrate ID", "Growth Days", "Day Light Integral", "Cutting Height", "Yield", "Plant Image"];

  return (
    <div>
      <div className="formulario"> 
        <AddNewRowForm  data={data || {}} />
      </div>

      <Deleterow  keyOptions={keyOptions} />

      
      <div className="selector">
        <BatchSelected  SelectionId={handleSelectionId} keyOptions={keyOptions} />
      </div>

      <table className="tabla">
        <ColumnHeaders columnNames={columnNames} />
        <tbody >
            {selectedSubstrateId === ""
            ? keyOptions.map((batch) => (
                <BatchTableRow  substrateId={parseInt(batch)} key={batch} handleDataUpdate={handleDataUpdate} />
              ))
            : <BatchTableRow substrateId={parseInt(selectedSubstrateId)} handleDataUpdate={handleDataUpdate}/>}
        </tbody>
      </table>
    </div>
  );
};

export default BatchTable;
