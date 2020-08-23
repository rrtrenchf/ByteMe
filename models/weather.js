const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
    weather: {
        type: String,
        require: true
    }
});

const Weather = mongoose.model("Weather", WeatherSchema)
module.exports = Weather;