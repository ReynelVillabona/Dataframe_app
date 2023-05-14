import React, { useEffect, useState } from "react";
import { printKeys } from "../data/database";

const BatchSelected = ({ SelectionId }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");
  const [keyOptions, setKeyOptions] = useState([]);

  useEffect(() => {
    printKeys()
      .then((keys) => {
        setKeyOptions(keys);
      })
      .catch((error) => {
        console.error("Error al obtener las claves:", error);
      });
  }, []);

  const handleSelection = (event) => {
    const selectedValue = event.target.value;
    setSelectedSubstrateId(selectedValue);
    SelectionId(selectedValue);
  };

  console.log("selectedSubstrateId:", selectedSubstrateId);
  console.log("typeof selectedSubstrateId:", typeof selectedSubstrateId);

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
