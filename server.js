import express from "express";
import path from "path";
const port = process.env.PORT || 5000;
const app = express();
import weatherRoutes from "./server/routes/weatherRoutes.js";
import mongoose from "mongoose";
import axios from "axios";
const API_KEY = "22a57af1d2347f83a9a3d2fa998e4a91";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const conn_str = `mongodb+srv://histeel:6984@cluster0.u3l9bic.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);

let apiWeatherSchema = mongoose.model("apiWeatherSchema", {
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

let apiForecastSchema = mongoose.model("apiForecastSchema", {
  list: { type: Array },
  apiName: { type: String },
});


const getApiData = await axios.get(
  `${BASE_URL}/weather?lat=55.7348&lon=24.3575&units=metric&appid=${API_KEY}`,
  {
    headers: { "accept-encoding": "*" },
  }
);

const getApiForecastData = await axios.get(
  `${BASE_URL}/forecast?lat=55.7348&lon=24.3575&cnt=54&units=metric&appid=${API_KEY}`,
  {
    headers: { "accept-encoding": "*" },
  }
);

const forecastData = getApiForecastData.data;
const data = getApiData.data;

const update = async () => {

  const updateForecast = await apiForecastSchema.updateOne({ _id: "6384a061ec416dba947769ac" },
  { $set: {list: forecastData.list},},
  { upsert: true })

  const updateWeather = await apiWeatherSchema.updateOne({ _id: "63849ce0cb9fde750834a3f8" },
{ $set: { 
    weather: data.weather[0].main,
    temp: data.main.temp,
    name: data.name,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    sea_level: data.main.sea_level,
    feels_like: data.main.feels_like,
    ico: data.weather[0].id.toString(),
    apiName: "Weather"},},
{ upsert: true })
}

const time = () =>{
const repeat = setInterval(update, 1.08e+7)
}
time()

const a = async() =>{
  console.log(await apiForecastSchema.findById("6384a061ec416dba947769ac"))
}




// var dt = new apiForecastSchema({
// dataDays: forecastData.list,
// apiName: "Forecast"
// })
//  dt.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })

// var dtt =  new apiWeatherSchema({

//  weather: data.weather[0].main,
//  temp: data.main.temp,
//  name: data.name,
//  temp_min: data.main.temp_min,
//  temp_max: data.main.temp_max,
//  humidity: data.main.humidity,
//  pressure: data.main.pressure,
//  sea_level: data.main.sea_level,
//  feels_like: data.main.feels_like,
//  ico: data.weather[0].id,
//  apiName: "Weather"
// })
//   dtt.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })

// var apiUrlMongo = mongoose.model("ApiUrlMongo", {
//   apiUrlName: { type: String },
//   apiUrl: { type: String },
// });

// var new_ApiUrl = new apiUrlMongo({
//   apiUrlName: 'Forecast',
//   apiUrl: 'https://api.openweathermap.org/data/2.5/forecast?lat=55.7348&lon=24.3575&cnt=54&units=metric&appid=22a57af1d2347f83a9a3d2fa998e4a91'

// })

// console.log(apiUrlMongo.findById("63847abe9867a718f1f08d28"))

//   new_ApiUrl.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })

weatherRoutes(app, apiForecastSchema, apiWeatherSchema);
// app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join("client/build/index.html"));
  });
}

app.listen(port, () => console.log("Example app is listening on port 5000."));


