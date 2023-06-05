import React, { useEffect, useState } from "react";
import BatchTable from "./components/BatchTable.js";

import "./styles/styles.css";
import { openDatabase, printKeys } from "./data/database.js";



function Table_render() {
  const [keyOptions, setKeyOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    openDatabase();
    printKeys()
      .then((keys) => {
        setKeyOptions(keys);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error obtaining the keys", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="scroll-container">
        <div className="centered-container">
          <h1>Data Visualization</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-container">
      <div className="centered-container">
        <h1>Data Visualization</h1>
        <BatchTable keyOptions={keyOptions} />
      </div>
    </div>
  );
}

export default Table_render;
