import React, { useState } from 'react';
import { deleteRow } from '../data/database.js';

const Deleterow = ({ keyOptions }) => {
    const [selectedKey, setSelectedKey] = useState('');
    
    const handleKeySelection = (event) => {
            const selectedKey = event.target.value;
            setSelectedKey(selectedKey);
    };

    console.log('Selected Key delete buttonnn:', selectedKey);
    console.log('Selected Key delete buttonnn:', typeof selectedKey);

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
        <div>
                <select value={selectedKey} onChange={handleKeySelection}>
                    <option value="">Select a key</option>
                    {keyOptions.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            <button onClick={handleDeleteButtonClick}>Delete</button>
        </div>
    );
}

export default Deleterow;