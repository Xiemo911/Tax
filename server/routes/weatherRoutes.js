
import Forecast from "../models/Forecast.js";
import Weather from "../models/Weather.js";

  export default function weatherRoutes(app){
 
    app.get("/api/get_weather", async(req, res) => {
        const getApiData = await Weather.findById("63849ce0cb9fde750834a3f8");
        res.json(getApiData)
      });
      
      app.get("/api/get_forecast", async(req, res) => {
        const getApiData = await Forecast.findById("6384a061ec416dba947769ac");
        res.json(getApiData)
      });
}
