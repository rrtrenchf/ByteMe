// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// // const PlaylistSchema = new Schema({
// //   name: { 
// //     type: String, 
// //   },
// //   songs: { 
// //     type: String
// //   },
// //   genre: { 
// //     type: String 
// //   },
// //   timeOfDay: { 
// //     type: Date, 
// //     default: Date.now 
// //   },
// //   weather: {  
// //     type:String,
// //     // Boolean:
    
// //   }
// // });


// //````````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// // const schema = Schema({ name: String, songs: String, weather: String,weatherMatch:Boolean });
// // // Creates a new schema with the same `name` path as `schema`,
// // // but no `age` path.
// // const newSchema = schema.pick(['name']);
// // newSchema.path('name'); // SchemaString { ... }
// // newSchema.path('age'); // undefined



// var schema = new Schema(props.weather);
// schema.post('save', createPlaylist (doc) {
//   console.log('this fired after a document was saved');
// });
// schema.post('find', function(docs) {
//   console.log('this fired after you ran a find query');
// });
// schema.post(/Many$/, function(res) {
//   console.log('this fired after you ran `updateMany()` or `deleteMany()`);
// });
// var Model = mongoose.model('Model', schema);
// var m = new Model(..);
// m.save(function(err) {
//   console.log('this fires after the `post` hook');
// });
// m.find(function(err, docs) {
//   console.log('this fires after the post find hook');
// });



// module.exports = Playlist = mongoose.model("playlist", PlaylistSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const playlistSchema = new Schema({ songName: String, artist: String, weather: String, weatherMatch:Boolean })

// const Playlist = mongoose.model("Playlist", playlistSchema);

// module.exports = Playlist;


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
    // email: {
    //     type: String,
    //     require: true
    // },
    // password: {
    //     type: String,
    //     require: true
    // }
    
});

module.exports = User = mongoose.model("playlist", PlaylistSchema);