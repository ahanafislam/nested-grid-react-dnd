import React, { useEffect, useState } from 'react';

const ObjectData = ({data}) => {
    const [formattedData, setFormattedData]= useState('');
    
    useEffect(() => {
        setFormattedData(JSON.stringify(data, null, 4));
    },[formattedData, data])

    return (
            <>
            <h3 style={{marginTop: "2.5rem"}}>Full Object Data:</h3>
            <textarea rows="20" cols="45" readOnly defaultValue={formattedData} style={{border: "2px solid blue"}}>
            </textarea>
            </>
    );
};

export default ObjectData;