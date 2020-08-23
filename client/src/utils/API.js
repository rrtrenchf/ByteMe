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
    deletPlaylist: function(id) {
      return axios.delete("/api/playlists/" + id);
    },
    // Saves a book to the database
    savePlaylist: function(data) {
      console.log("SavePlaylist",data)
      return axios.post("/api/playlists",{"songName":data});
    }
  };