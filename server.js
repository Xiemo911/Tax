import express from "express";
import path from "path";
import State from "./server/models/State.js";
const port = process.env.PORT || 5000;
const app = express();
import weatherRoutes from "./server/routes/weatherRoutes.js";
import LoginRoutes from "./server/routes/LoginRoutes.js";
import { updateWeather } from "./server/repositories/WeatherRepository.js";
import { updateForecast } from "./server/repositories/ForecastRepository.js";
import connect from "./server/configs/connect.js";
import data from "./data.json" assert { type: "json" };
import submitRoute from "./server/routes/submitRoute.js";

const update = async () => {
  updateWeather();
  updateForecast();
};

// const stateData = async() => {
//    await data.map(async(i, ind) => {
//     console.log(i.state);
//      const res = await State.create(
//     {
//       name: i.state,
//       abbreviation: i.abbreviation,
//                  lowestIncomeTaxBracket: i.lowestIncomeTaxBracket,
//     highestIncomeTaxBracket: i.highestIncomeTaxBracket,
//     }
//     );
//     console.log(res)
//   }

//   );
// };

// const timed = () =>{
//  setInterval(stateData, 5000)
// }
// timed()
// // stateData();

LoginRoutes(app);
weatherRoutes(app);
submitRoute(app);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join("client/build/index.html"));
  });
}

app.listen(port, () => console.log("Example app is listening on port 5000."));
