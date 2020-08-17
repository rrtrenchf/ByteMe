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
import Api from "./Api"


function App() {
    return (
        <div>
            <Api/>
            <ResultList
          results={this.state.results}
          search={this.state.search}
          sortList={this.sortList}
        />
         </div>
    )
}

export default App;