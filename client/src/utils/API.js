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
      console.log("SavePlaylist",data[0])
      return axios.post("/api/playlists",{"songName":data[0].name, "artistName":data[0].artists[0].name,"songUri":data[0].uri, "weather":data[1]});
    },
    //get weather info
    getWeather: function() {
      return axios.get("/api/weather")
    },
    postWeather: function(data) {
      console.log("WEATHER DATA", data)
      return axios.post("/api/weather",{"weather":data,"updatedZip":data})
    }
  
  };