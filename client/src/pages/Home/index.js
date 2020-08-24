import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Api from "../../components/Api";
import $ from "jquery";
import "./style.css";
// import './home.html';


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
    // const makeItRain = function () {
    //     //clear out everything
    //     $('.rain').empty();

    //     let increment = 0;
    //     let drops = "";
    //     let backDrops = "";

    //     while (increment < 100) {
    //         //couple random numbers to use for various randomizations
    //         //random number between 98 and 1
    //         let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //         //random number between 5 and 2
    //         let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //         //increment
    //         increment += randoFiver;
    //         //add in a new raindrop with various randomizations to certain CSS properties
    //         drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    //         backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';

    //     }








    //     { $('.rain.front-row').append(drops) };
    //     { $('.rain.back-row').append(backDrops) };


    //     {
    //         $('.splat-toggle.toggle').on('click', function () {
    //             $('body').toggleClass('splat-toggle');
    //             $('.splat-toggle.toggle').toggleClass('active');
    //             makeItRain();
    //         })
    //     }

    //     {
    //         $('.back-row-toggle.toggle').on('click', function () {
    //             $('body').toggleClass('back-row-toggle');
    //             $('.back-row-toggle.toggle').toggleClass('active');
    //             makeItRain();
    //         })
    //     }

    //     {
    //         $('.single-toggle.toggle').on('click', function () {
    //             $('body').toggleClass('single-toggle');
    //             $('.single-toggle.toggle').toggleClass('active');
    //             makeItRain();
    //         })
    //     }

    // }


    return (
        <div>
            
            <div class="jumbotron" >
            
                <h1 class="display-4" style={{ textAlign: "center" }}>Sweater Weather</h1>
                {/* {makeItRain()} */}
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