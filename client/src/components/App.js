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
import axios from "axios"
import Api from "./Api"


function App() {
  return (
    <Router>
      <div>
        {/* switch keeps pages from loading at same time */}
        <Switch>
        <Route exact path="/" component={Api} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// npm install react-router-dom

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavTabs />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/blog" component={Blog} />
//         <Route path="/contact" component={Contact} />
//       </div>
//     </Router>
//   );
// }

// export default App;