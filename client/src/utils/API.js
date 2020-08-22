// import axios from "axios";
// export default {
//     // API request to server side 
//     register(data) {
//         return axios.post("/auth/register", data)
//     },
//     login(data) {
//         return axios.post("/auth/login", data)
//     },
//     loadUser(headers) {
//         return axios.get("/auth/user", headers)
//     }
// }
import axios from "axios";

export default {
  // Gets all books
//   getsongs: function() {
//     return axios.get("/api/songs");
//   },
  // Gets the book with the given id
  getPlaylist: function(id) {
    return axios.get("/v1/me/tracks");
  },
  // Deletes the book with the given id
  deletPlaylist: function(id) {
    return axios.delete("/v1/me/tracks");
  },
  // Saves a book to the database
  savePlaylist: function(Data) {
    return axios.post("/api/playlist");
  }
};
