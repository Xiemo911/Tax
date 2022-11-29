import axios from "axios";
import mongoose from "mongoose";
const API_KEY = "22a57af1d2347f83a9a3d2fa998e4a91";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

  export default function weatherRoutes(app, apiForecastSchema, apiWeatherSchema){
 
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

    app.get("/api/get_weather", async(req, res) => {
        const getApiData = await apiWeatherSchema.findById("63849ce0cb9fde750834a3f8");
        console.log(getApiData)
        res.json(getApiData)
      });
      
      app.get("/api/get_forecast", async(req, res) => {
        const getApiData = await apiForecastSchema.findById("6384a061ec416dba947769ac");
        res.json(getApiData)
      });
}
