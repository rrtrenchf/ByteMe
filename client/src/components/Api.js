import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import axios from "axios"
import SearchForm from "./SearchForm";



class Api extends React.Component {
  state = {
    search: "",
    WeatherResults: {},
    SpotifyResults: {}
  };

  componentDidMount() {

    var config = {
      //get token
      method: 'post',
      url: 'https://accounts.spotify.com/api/token?grant_type=client_credentials',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZmM5NzkyYzNkOWU0NGRmODk1NjM4OTY1YmZmOGI4MGI6NmE2OTYwODNkNDMwNDM5ZGJmMGNmNTRjZDg2MTYyMGY=',
      },
      data: ""
    };

    axios(config)
      //got token
      .then( (response) => {
        var token = response.data.access_token
        console.log(token);
        //another axios get to search with the token(BQBJZeaaEsHYfSeM7ndR7uDcA2IyenVdLq-q9uFHp2V_CTdVl2NQdyGuxG0TdQy0H9cYGR0ntu-yYw7bh04)
        var config = {
          method: 'get',
          url: 'https://api.spotify.com/v1/search?q=Greenday&type=artist',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': ('Bearer '+ token)
          },
          data: ""
        };





        axios(config)
          .then( (response) => {
            //setState to get results for table
            this.setState({ SpotifyResults: response.data })
            console.log((response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
    //weather API Call
    if ("geolocation" in navigator) {
      console.log("Available")
      navigator.geolocation.getCurrentPosition( (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        console.log("Latitude is :", lat);
        console.log("Longitude is :", lon);

        axios({

          url: "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=e971f7deaf07913de154d7e7ed5455c5&units=imperial",
          method: "GET",
        }).then( (response)=> {
          console.log(response.data)
          this.setState({WeatherResults:response.data})
        })
        // After data comes back from the request
        // .then(function (response) {
        //     // console.log(queryURL)
        //     console.log(response);
        //     var temp = (response.main.temp);
        //     var hum = response.main.humidity;
        //     var windspeed = response.wind.speed;
        //     // storing the data from the AJAX request in the results variable
        //     $("#temp").text("temperature:" + temp)
        //     $("#hum").text("Humidity:" + hum)
        //     $("#windSpeed").text("Wind Speed:" + windspeed)
        //     $("#cityboard").text(city)
        //     $("#icon").attr("src", `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)
        //     var lat = response.coord.lat
        //     var lon = response.coord.lon
        //     var uvqueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=6fcaead496f20955af428e501d122c6f&lat=" + lat + "&lon=" + lon
        //     return $.ajax({
        //         url: uvqueryURL,
        //         method: "GET"
        //     })
        // })
        // .then(function (response) {
        //     console.log(response)
        //     var uvi = response.value
        //     console.log(uvi)
        //     $("#uv").text(`UV Index:${uvi}`)
        //     var fivedayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=6fcaead496f20955af428e501d122c6f&units=imperial"
        //     // var iconURL =  
        //     return $.ajax({
        //         url: fivedayURL,
        //         method: "GET"
        //     })
        // })
        //for loop to go through the 5 day forecast. Each day an index stored in a variable.
        // .then(function (response) {
        //     // console.log(response)
        //     var fiveDayForecast = $("#5dayForecast")
        //     fiveDayForecast.empty()
        //     for (i = 8; i < response.list.length; i += 8) {
        //         var day = response.list[i];
        //         var forecast = $("<div></div>");
        //         forecast.addClass('card');
        //         var temp = $(`<h3>Next Day</h3><p>Temp: ${day.main.temp}</p>`);
        //         var hum = $(`<p>Humidity: ${day.main.humidity}</p>`);
        //         var windSpeed = $(`<p>Wind Speed: ${day.wind.speed}</p>`);
        //         var icon = $(`<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">`)
        //         //make items
        //         forecast.append(temp, hum, windSpeed, icon);
        //         //append items
        //         fiveDayForecast.append(forecast)
        //     }


      })
      // })
    }
  }
// ^^^^^^^^^^ End of didMountComponent for API calls^^^^^^^^^^^



//Hide and show element on zipcode on click
  
  handleClick = (event) => {
    event.preventDefault();
    console.log('The link was clicked.');
    

  };

  //will handle the filtering of first or last name
  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // console.log("This is the value", value)
    this.setState({
      search: value
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleClick={this.handleClick}
        />

        {/* <SpotifyResults 
          results={this.state.results}
        /> */}
      </div>
    )
  };

};


export default Api;
