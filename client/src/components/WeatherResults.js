import React from "react";

const WeatherResults = (props) => {

  let weatherResults=props.weatherResults

  if (weatherResults.includes("cloud")) {  
    console.log("CLOUDY DAY")
  } else if (weatherResults.includes("rain")) {
    console.log("RAINY DAY")
    //rainy playlist will pull up here
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
  };

  return (
    <>
      <div>
         <h2>
             {weatherResults}
        </h2>
      </div>
    </>

  );
}

export default WeatherResults;