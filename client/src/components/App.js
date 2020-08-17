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
.then(function (response) {
  console.log(response.data);
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
