import React, { useState } from "react";
import BatchTableRow from "./BatchTableRow";
import BatchSelected from "./Batchselected";

const BatchTable = ({ batches }) => {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState("");

  const SelectionId = (event) => {
    setSelectedSubstrateId(event.target.value);
  };

  const filteredBatches = batches.filter((batch) =>
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
          <th>Plant Image</th>
        </tr>
        <tr>
          <td>
            <BatchSelected
              batches={batches}
              selectedSubstrateId={selectedSubstrateId}
              SelectionId={SelectionId}
            />
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredBatches.map((batch) => (
          <BatchTableRow key={batch.substrate_id} batch={batch} />
        ))}
      </tbody>
    </table>
  );
};

export default BatchTable;
