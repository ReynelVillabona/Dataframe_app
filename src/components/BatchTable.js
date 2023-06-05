import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow.js";
import BatchSelected from "./Batchselected.js";
import ColumnHeaders from "./ColumnHeaders.js";
import AddNewRowForm from "./AddButton.js";
import Deleterow from "./Deletebutton.js";

import "../styles/styles.css";

//recived keys as property
const BatchTable = ({ keyOptions }) => {

  //first we define states of the variables handle here
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");
  const [data, setData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  console.log('indexOfFirstRow:', indexOfFirstRow);
  console.log('indexOfLastRow:', indexOfLastRow);
  console.log('indexOfLastRow:', keyOptions.length);



  // created here but passed to others components 
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
            ? keyOptions
            .slice(indexOfFirstRow, indexOfLastRow)
            .map((batch) => (
                <BatchTableRow  substrateId={parseInt(batch)} key={batch} handleDataUpdate={handleDataUpdate} />
              ))
            : <BatchTableRow substrateId={parseInt(selectedSubstrateId)} handleDataUpdate={handleDataUpdate}/>}
        </tbody>
      </table>

      <div>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
        )}
        {keyOptions.length > indexOfLastRow && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
        )}
      </div>

      <div>Página {currentPage}</div>

    </div>
  );
};

export default BatchTable;
