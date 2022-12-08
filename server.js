import express from "express";
import path from "path";

const port = process.env.PORT;
const app = express();
import weatherRoutes from "./server/routes/weatherRoutes.js";
import LoginRoutes from "./server/routes/LoginRoutes.js";
import { updateWeather } from "./server/repositories/WeatherRepository.js";
import { updateForecast } from "./server/repositories/ForecastRepository.js";
import connect from "./server/configs/connect.js";

connect;

const update = async () => {
  updateWeather();
  updateForecast();
};

const time = () => {
  const repeat = setInterval(update, 1.08e7);
};
time();

LoginRoutes(app);
weatherRoutes(app);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join("client/build/index.html"));
  });
}

app.listen(port, () => console.log("Example app is listening on port 5000."));
