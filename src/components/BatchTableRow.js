import React, { useEffect, useState } from "react";
import { getDataBySubstrateId } from "../data/database.js";
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

  const handleButtonClick = () => {
  console.log(substrateId);
  getDataBySubstrateId(substrateId)
    .then((data) => {
      
      if (handleDataUpdate) {
        handleDataUpdate(data[0]); // función en BatchTable
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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
      <td>{batchData.substrate_id}</td>
      <td>{batchData.growth_days}</td>
      <td>{batchData.day_light_integral}</td>
      <td>{batchData.cutting_height}</td>
      <td>{batchData.yield}</td>
      <td>
        <img src={batchData.image} alt={`Plant ${batchData.substrate_id}`} style={{ width: "100px" }} />
      </td>
      <td>
        {isHovered && (
          <button className="button" onClick={handleButtonClick}>Modificar</button>
        )}
      </td>
    </tr>
  );
};

export default BatchTableRow;
