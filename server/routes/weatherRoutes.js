
import mongoose from "mongoose";
const API_KEY = "22a57af1d2347f83a9a3d2fa998e4a91";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

  export default function weatherRoutes(app, apiForecastSchema, apiWeatherSchema){
 
    app.get("/api/get_weather", async(req, res) => {
        const getApiData = await apiWeatherSchema.findById("63849ce0cb9fde750834a3f8");
        res.json(getApiData)
      });
      
      app.get("/api/get_forecast", async(req, res) => {
        const getApiData = await apiForecastSchema.findById("6384a061ec416dba947769ac");
        res.json(getApiData)
      });
}
