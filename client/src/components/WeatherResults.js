import React from "react";

function WeatherResults(props) {

  const resultsWeather = props.weatherResults
  console.log("*****************FORECAST**", props.weatherResults)
  let forecastResults = []

  // if (resultsWeather?.length !== 0) {
  //   forecastResults = resultsWeather?.list[0].weather[0].main
  // }
  // console.log("WEATHER RESULTS", forecastResults)

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

  return (
    <>
      <div>
         <h2>
             {forecastResults} Playlist
        </h2>
      </div>
    </>

  );
}


export default WeatherResults;