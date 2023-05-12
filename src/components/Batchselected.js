import React from "react";

const BatchSelected = ({ batches, selectedSubstrateId, SelectionId }) => {
  return (
    <select value={selectedSubstrateId} onChange={SelectionId}>
      <option value="">All</option>
      {batches.map((batch) => (
        <option key={batch.substrate_id} value={batch.substrate_id}>
          {batch.substrate_id}
        </option>
      ))}
    </select>
  );
};

export default BatchSelected;
