import React from "react";
import BatchTable from "./components/BatchTable.js";
import BATCHES from "./data/datos.js"
import "./styles/styles.css";




function table_render()  {
  return (
    <div className="centered-container">
      <h1>Data Vizualization</h1> 
      <BatchTable batches={BATCHES} />
    </div>
  );
}

export default table_render;
