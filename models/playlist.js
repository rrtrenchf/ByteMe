const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
   
    songName: {
        type: String,
        require: true
    },
    artistName: {
        type: String,
        require: true
    },
    weather: {
        type: String,
        require: true
    },
    updatedZip:{
        type: String,
        require: true
    }
    // email: {
    //     type: String,
    //     require: true
    // },
});

const Playlist = mongoose.model("Playlist", PlaylistSchema)
module.exports = Playlist;