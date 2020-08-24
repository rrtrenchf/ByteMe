import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Api from "../../components/Api";

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }



    return (
        <div>
            <div class="jumbotron" >
                <h1 class="display-4" style={{ textAlign:"center",fontFamily: "'Julius Sans One', sans-serif" }}>Sweater Weather</h1>
            </div>
            <Router>
                <div>
                    {/* switch keeps pages from loading at same time */}
                    <Switch>
                        <Route exact path="/" component={Api} />
                    </Switch>
                </div>
            </Router>
        </div>

    )
};

export default Home;