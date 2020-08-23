import axios from "axios";
import React from "react"
export default {
    // API request to server side 
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },
    //gets all playlists
    getPlaylists: function() {
      return axios.get("/api/playlists")
    },
    getPlaylist: function(id) {
      return axios.get("/api/playlists/" + id);
    },
    // Deletes the book with the given id
    deletePlaylist: function(id) {
      return axios.delete("/api/playlists/" + id);
    },
    // Saves a book to the database
    savePlaylist: function(data) {
<<<<<<< HEAD
      console.log("SavePlaylist",data[0])
      return axios.post("/api/playlists",{"songName":data[0].name, "artistName":data[0].artists[0].name, "weather":data[1]});
=======
      console.log("SavePlaylist",data)
      return axios.post("/api/playlists",{"songName":data.name, "artistName":data.artists[0].name, "weather":data.forecastResults});
>>>>>>> dc837c3926335648b926d2fe0288f861982cddbe
    },

    //get weather info
    getWeather: function() {
      return axios.get("/api/weather")
    },
    postWeather: function(data) {
      console.log("WEATHER DATA", data)
      return axios.post("/api/weather",{"weather":data})
    }
  
  };