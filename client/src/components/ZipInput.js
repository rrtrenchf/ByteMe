import React, { useState } from "react";

const ZipInput = (props) => {

    const [hidden, setHidden] = useState(true);
    
    return (
    <div className="zipInput mb-3" style={{ position: "relative", left: "43%" }}>
        <a href="#" onClick={props.handleClick} >
            Want a different location?
        </a>
        {hidden ? (
        <input
            onChange={props.handleZipInputChange}
            zipValue={props.inputValue}
            id="results"
            type="text"
            name="zip"
            placeholder="Enter zip code"
        >
        </input> 
        )}
        {hidden ? (
        <button type="button" class="btn btn-danger" onClick={({props.handleZip}) => setHidden (true)}>New Zip</button>
         )}
    </div>
    );
}

export default ZipInput;