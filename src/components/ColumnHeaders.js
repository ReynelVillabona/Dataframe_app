import React from 'react';

const ColumnHeaders = ({ columnNames }) => {
  return (
    <thead>
      <tr>
        {columnNames.map((columnName, index) => (
          <th key={index}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
};

export default ColumnHeaders;
