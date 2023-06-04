import React, { useState } from 'react';
import DeleteButton from "../functions_events/DeleteFunction.js"
import "../styles/styles.css";


const Deleterow = ({ keyOptions }) => {
    const [selectedKey, setSelectedKey] = useState('');
    
    const handleKeySelection = (event) => {
            const selectedKey = event.target.value;
            setSelectedKey(selectedKey);
    };

    
    
    return (
        <div className="delete-row">
                <select value={selectedKey} onChange={handleKeySelection}>
                    <option value="">Select a key</option>
                    {keyOptions.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
             <DeleteButton selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        </div>
    );
}

export default Deleterow;