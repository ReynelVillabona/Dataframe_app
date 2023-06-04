import React from 'react';
import { deleteRow } from '../data/database.js';

const DeleteButton = ({ selectedKey, setSelectedKey }) => {
  const handleDeleteButtonClick = () => {
    if (selectedKey) {
      const keyToDelete = parseInt(selectedKey);

      deleteRow(keyToDelete)
        .then(() => {
          console.log('Row deleted successfully');
          setSelectedKey(''); // Reset the selected key
          window.location.reload();
        })
        .catch((error) => {
          console.log('Error deleting row', error);
        });
    } else {
      console.log('Please select a key');
    }
  };

  return (
    <button onClick={handleDeleteButtonClick}>Delete</button>
  );
};

export default DeleteButton;
