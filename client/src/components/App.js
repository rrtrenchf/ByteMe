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

class App extends React.Component {
    state = {"":""}

componentDidMount(){
    
 

var config = {
    //get token
  method: 'post',
  url: 'https://accounts.spotify.com/api/token?grant_type=client_credentials',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Authorization': 'Basic ZmM5NzkyYzNkOWU0NGRmODk1NjM4OTY1YmZmOGI4MGI6NmE2OTYwODNkNDMwNDM5ZGJmMGNmNTRjZDg2MTYyMGY=', 
    
  },
  data :""
};

axios(config)
//got token
.then(function (response) {
    var token = response.data.access_token

  console.log(response.data.access_token);
  //another axios get to search with the token(BQBJZeaaEsHYfSeM7ndR7uDcA2IyenVdLq-q9uFHp2V_CTdVl2NQdyGuxG0TdQy0H9cYGR0ntu-yYw7bh04)
  var config = {
    method: 'get',
    url: 'https://api.spotify.com/v1/search?q=Greenday&type=artist',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization': 'Bearer BQBJZeaaEsHYfSeM7ndR7uDcA2IyenVdLq-q9uFHp2V_CTdVl2NQdyGuxG0TdQy0H9cYGR0ntu-yYw7bh04'
    },
    data :""
  };
  
  axios(config)
  .then(function (response) {
    console.log((response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
})
.catch(function (error) {
  console.log(error);
});

 
}


render(){
    return (
 <div>

 </div>
 )
 };

};


export default App;
