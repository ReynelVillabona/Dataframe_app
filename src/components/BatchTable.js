import React from "react";
import BatchTableRow from "./BatchTableRow";

const BatchTable = ({ batches }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Substrate ID</th>
          <th>Growth Days</th>
          <th>Day Light Integral</th>
          <th>Cutting Height</th>
          <th>Yield</th>
        </tr>
      </thead>
      <tbody>
        {batches.map((batch) => (
          <BatchTableRow key={batch.substrate_id} batch={batch} />
        ))}
      </tbody>
    </table>
  );
};

export default BatchTable;