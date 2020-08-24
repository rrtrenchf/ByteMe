import React, { useState } from "react";

const ZipInput = (props) => {
  //getting weather results
  const zipCode= props.zipCode
  //working with changing weather input
  const [hidden, setHidden] = useState(true);

  const toggleShow = () => {
    setHidden(!hidden);
  };
  
  const submit = () => {
    setHidden(true);
    if (props.handleZip) {
      props.handleZip(zipCode);
    }
  };

  return (
    <div>
  
    <div
      className="zipInput mb-3"
      style={{ position: "relative", left: "43%" }}
    >
      <a href="#" onClick={toggleShow}>
        Want a different location?
        </a>
      <div
       className="newZipInput mb-3"
       style={{ position: "relative" }}>
      {!hidden && 
       <input 
        type="text" 
        name="zip" 
        placeholder="Enter ZIP Code"
        onChange={props.handleZipInputChange}
        value={props.zipCode}
       />
      }

      {!hidden && (
        <button type="button" class="btn btn-danger" onClick={submit}>
          New Zip
        </button>
      )}
      </div>
    </div>
    </div>
  );
};

export default ZipInput;



  // if (weatherResults.includes("cloud")) {  
  //   //will have a cloudy playlist that pull up here
  // } else if (weatherResults.includes("rain")) {
  //   //rainy playlist will pull up here
  // } else if (weatherResults.includes("sun")) {
  //   //sunny day playlist will pull here
  // } else if (weatherResults.includes("storm")) {
  //   //thunderstorm playlist will pull here
  // } else if (weatherResults.includes("snow")) {
  //   //snowy playlist will pull here
  // } else if (weatherResults.includes("wind")) {
  //   //windy playlist will pull here
  // } else {
  //   //"just to listen" playlist will pull here
  // };