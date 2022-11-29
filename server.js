import express from "express";
import path from "path";
const port = process.env.PORT || 5000;
const app = express();
import weatherRoutes from "./server/routes/weatherRoutes.js";
const API_KEY = "22a57af1d2347f83a9a3d2fa998e4a91";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
import { updateWeather } from "./server/repositories/WeatherRepository.js";
import { updateForecast } from "./server/repositories/ForecastRepository.js";
import connect from "./server/configs/connect.js";

connect

const update = async () => {
  updateWeather();
  updateForecast();
};

const time = () => {
  const repeat = setInterval(update, 1.08e7);
};
time();

weatherRoutes(app);
// app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join("client/build/index.html"));
  });
}

app.listen(port, () => console.log("Example app is listening on port 5000."));
