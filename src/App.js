import React, { useEffect } from "react";
import BatchTable from "./components/BatchTable.js";
import BATCHES from "./data/datos.js";
import "./styles/styles.css";
import { openDatabase } from "./data/database.js";


function Table_render() {

  useEffect(() => {
    
    openDatabase();
  }, []);

  return (
    <div className="scroll-container">
      <div className="centered-container">
        <h1>Data Visualization</h1>
        <BatchTable batches={BATCHES} />
        
      </div>
    </div>
  );
}

export default Table_render;
