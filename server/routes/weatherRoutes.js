import axios from "axios";
const API_KEY = "22a57af1d2347f83a9a3d2fa998e4a91";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

  export default function weatherRoutes(app){
console.log("aaaaaa")
    app.get("/api/get_weather", async(req, res) => {
        const getApiData = await axios.get(`${BASE_URL}/weather?lat=55.7348&lon=24.3575&units=metric&appid=${API_KEY}`, {
          headers: { "accept-encoding": "*" },
        });
        res.json(getApiData.data)
      });
      
      app.get("/api/get_forecast", async(req, res) => {
        const getApiData = await axios.get(`${BASE_URL}/forecast?lat=55.7348&lon=24.3575&cnt=54&units=metric&appid=${API_KEY}`, {
          headers: { "accept-encoding": "*" },
        });
        res.json(getApiData.data)
      });
}
