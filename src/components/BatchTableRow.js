import React from "react";

const BatchTableRow = ({ batch }) => {
  
  return (
    <tr>
      <td>{batch.substrate_id}</td>
      <td>{batch.growth_days}</td>
      <td>{batch.day_light_integral}</td>
      <td>{batch.cutting_height}</td>
      <td>{batch.yield}</td>
      <td>
        <img src={batch.image} alt={`Plant ${batch.substrate_id}`} style={{ width: "100px" }} />
      </td>
    </tr>
    
  );
};

export default BatchTableRow;