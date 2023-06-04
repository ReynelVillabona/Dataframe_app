import React, { useEffect, useState } from "react";
import { getDataBySubstrateId } from "../data/database.js";
import { handleButtonClick } from "../functions_events/ModifiedFunction.js";

import "../styles/styles.css";

const BatchTableRow = ({ substrateId, handleDataUpdate }) => {
  const [batchData, setBatchData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);



  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  useEffect(() => {
    if (substrateId) {
      getDataBySubstrateId(substrateId)
        .then((data) => {
          setBatchData(data[0]);
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [substrateId]);

  

  if (!batchData) {
    return <tr><td colSpan={6}>Loading...</td></tr>; 
  }

  return (
    <tr onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <td className="centered">{batchData.substrate_id}</td>
      <td className="centered">{batchData.growth_days}</td>
      <td className="centered">{batchData.day_light_integral}</td>
      <td className="centered">{batchData.cutting_height}</td>
      <td className="centered">{batchData.yield}</td>
      <td>
        <img src={batchData.image} alt={`Plant ${batchData.substrate_id}`} style={{ width: "100px" }} />
      </td>
      <td>
        {isHovered && (
          <button className="button" onClick={() => handleButtonClick(substrateId, handleDataUpdate)}>Modificar</button>
        )}
      </td>
    </tr>
  );
};

export default BatchTableRow;
