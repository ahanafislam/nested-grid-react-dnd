import React, { useEffect, useState } from 'react';

const ObjectData = ({data}) => {
    const [formattedData, setFormattedData]= useState('');
    
    useEffect(() => {
        setFormattedData(JSON.stringify(data, null, 4));
    },[formattedData, data])

    return (
            <textarea rows="10" cols="45" readOnly defaultValue={formattedData} style={{marginTop: "2.5rem", border: "2px solid blue"}}>
            </textarea>
    );
};

export default ObjectData;