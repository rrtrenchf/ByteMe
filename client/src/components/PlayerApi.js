import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./AppPlayer";
// import logo from "./logo.svg";
import "./App.css";

class PlayerApp extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
    this.play = this.play.bind(this)
  }



  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }


  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */
        })
      }
    });
  }
  ///player/queue?uri=
   play(){
       if(this.state.is_playing){

       
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/pause",
        type: "PUT",
        beforeSend: xhr => {
          xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
        },
        success: data => {
          // Checks if the data is not empty
          console.log("PLAY DATA",data)
        }
      });
    }else{
      $.ajax({
        url: "https://api.spotify.com/v1/me/player/play",
        type: "PUT",
        beforeSend: xhr => {
          xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
        },
        success: data => {
          // Checks if the data is not empty
          console.log("PLAY DATA",data)
        }
      }).then()
    }
  }

  AddQueue(){
      
    
    $.ajax({
        method: 'POST',
      url: "https://api.spotify.com/v1/me/player/queue?uri=spotify:track:58mFu3oIpBa0HLNeJIxsw3&device_id=1362fc4794c76b95db494004a7dab1727c47455f",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDt0N9spjWBzV2lsiNkv29q-Oq4hWpb5LFaHMqJjq-jsMZu0EQNcl_WG7gnQdEHna4Wkja8FvxSBMvnJSUQY2rMN_L39hQwBkfSGUJ-NMonIyeSi3y-NM7eB_jPZEvsk8n7-GbL4EkgSKO979rShD4g1uDmCx2eUuRQxdwNgff59wYcc-l9h9ttIqCib2S_xJbDWgkIly_dUo0OKkoWQbbA9-5XprgNi9CJ3CQF4ry5Id1aQxyQWv6in8mcQ6IDJzqQikUAnj0vuuCRc6GIZ7iQX1Mu8hlvOipw',
      },
      success: data => {
        console.log("DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========",data)
      }
       
        
      });
      
  }
  device(){
    $.ajax({
        url: "	https://api.spotify.com/v1/me/player/devices",
        type: "GET",
        beforeSend: xhr => {
          xhr.setRequestHeader("Authorization: BQBNYhZq4XBXbF-V8WxnUX2zPU4zinBllhglKo-I2N91ILsdm1raH0RGYO3UBbvmdBJehPmTm6d0qeHWXkc");
        },
        success: data => {
          // Checks if the data is not empty
          console.log("DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========",data)
  
         
        }
      });
      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && !this.state.no_data && (
              <div>
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
            <button onClick={this.AddQueue}>Pause/Play</button>
            </div>
          )}
          {this.state.no_data && (
            <p>
              You need to be playing a song on Spotify, for something to appear here.
            </p>
          )}
        </header>
      </div>
    );
  }
}

export default PlayerApp;