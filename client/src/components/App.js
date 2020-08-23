import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import axios from "axios";
// import Playlist from "../../../models/playlist";
import Playlist from "../pages/Playlist/playlist"

export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(loadUser());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>
          <Router history={history}>
              <NavBar />
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <PrivateRoute path="/dashboard" component={UserDashboard} />
                  <PrivateRoute path="/pageone" component={PageOne} />
                  {/* <Route path = "/api/playlist" component= {Playlist} /> */}
              </Switch>
          </Router>
      </>
  )
}


export default App; 