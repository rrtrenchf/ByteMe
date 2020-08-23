import React, { useState } from "react";

const ZipInput = (props) => {
    const [hidden, setHidden] = useState(true);
    
    const toggleShow = () => {
      setHidden(!hidden);
    };
  
    const inputValue = () => {
     if (props.handleZipInputChange) {
         return props.handleZipInputChange();
      }
    }

    const submit = () => {
      setHidden(true);
      if (props.handleZip) props.handleZip();
    };
  
    return (
      <div
        className="zipInput mb-3"
        style={{ position: "relative", left: "43%" }}
      >
        <a href="#" onClick={toggleShow}>
          Want a different location?
        </a>
  
        {!hidden && <input type="text" name="zip" placeholder="Enter ZIP Code" onChange={inputValue} />}
  
        {!hidden && (
          <button type="button" class="btn btn-danger" onClick={submit}>
            New Zip
          </button>
        )}
      </div>
    );
  };

export default function App() {
  return <ZipInput />;
}


