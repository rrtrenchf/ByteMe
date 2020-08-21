const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlaylistSchema = new Schema({
  name: { 
    type: String, 
  },
  songs: { 
    type: String
  },
  genre: { 
    type: String 
  },
  timeOfDay: { 
    type: Date, 
    default: Date.now 
  }
});


module.exports = Playlist = mongoose.model("playlist", PlaylistSchema);