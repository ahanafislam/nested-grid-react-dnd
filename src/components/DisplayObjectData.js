import React, { useEffect, useState } from 'react';
import initialData from '../initial-data';

const ObjectData = ({layout, components}) => {
    const [formattedData, setFormattedData]= useState('');
    const [initialDataObj, setInitialDataObj] = useState(initialData);
    
    useEffect(() => {
        initialData.layout = [...layout];
        initialData.components = {...components};
        setInitialDataObj(initialData);
        setFormattedData(JSON.stringify(initialDataObj, null, 4));
        // console.log("@@@@@@",initialDataObj);
    },[formattedData, layout, initialDataObj, components])

    return (
            <>
            <h3 style={{marginTop: "2.5rem"}}>Full Object Data:</h3>
                <textarea rows="25" cols="45" readOnly defaultValue={formattedData} style={{border: "2px solid blue"}}>
                </textarea>
            </>
    );
};

export default ObjectData;