import React from "react";

function WeatherResults(props) {

  const results = props.weatherResults
  console.log("Weather call", results)
  let weatherResults = []

  if (results.length !== 0) {
    weatherResults = results.list[0].weather[0].main
  }
  console.log("WEATHER RESULTS", weatherResults)

  if (weatherResults === "Clouds") {  
    
  }

  return (
    <div>
      <h2>Cloudy Playlist</h2>
    </div>

  );
}


export default WeatherResults;