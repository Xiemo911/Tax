import mongoose from "mongoose";
const Weather = mongoose.model("apiWeatherSchema", {
  name: { type: String },
  weather: { type: String },
  temp: { type: Number },
  temp_min: { type: Number },
  temp_max: { type: Number },
  humidity: { type: Number },
  pressure: { type: Number },
  sea_level: { type: Number },
  feels_like: { type: Number },
  ico: { type: String },
  apiName: { type: String },
});

export default Weather;
