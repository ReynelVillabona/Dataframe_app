import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow";

const BatchTable = ({ batches }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  const IdChange = (event) => {
    setSelectedSubstrateId(event.target.value);
  };

  const filteredtable = batches.filter((batch) =>
    selectedSubstrateId !== "" ? batch.substrate_id === parseInt(selectedSubstrateId) : true
  );

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
        <tr>
          <td>
            <select value={selectedSubstrateId} onChange={IdChange}>
              <option value="">All</option>
              {batches.map((batch) => (
                <option key={batch.substrate_id} value={batch.substrate_id}>
                  {batch.substrate_id}
                </option>
              ))}
            </select>
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredtable.map((batch) => (
          <BatchTableRow key={batch.substrate_id} batch={batch} />
        ))}
      </tbody>
    </table>
  );
};

export default BatchTable;
