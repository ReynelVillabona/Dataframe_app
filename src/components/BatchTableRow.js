import React, { useEffect, useState } from "react";
import { getDataBySubstrateId } from "../data/database.js";

const BatchTableRow = ({ substrateId }) => {
  const [batchData, setBatchData] = useState(null);

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

  console.log("batchData:", batchData);

  if (!batchData) {
    return <tr><td colSpan={6}>Loading...</td></tr>; 
  }

  return (
    <tr>
      <td>{batchData.substrate_id}</td>
      <td>{batchData.growth_days}</td>
      <td>{batchData.day_light_integral}</td>
      <td>{batchData.cutting_height}</td>
      <td>{batchData.yield}</td>
      <td>
        <img src={batchData.image} alt={`Plant ${batchData.substrate_id}`} style={{ width: "100px" }} />
      </td>
    </tr>
  );
};

export default BatchTableRow;
