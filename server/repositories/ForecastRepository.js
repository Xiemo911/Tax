import { getApiForecastData } from "../services/getWeather.js";
import Forecast from "../models/Forecast.js";

export async function updateForecast (){
    const data = await getApiForecastData()
const res = await Forecast.updateOne(
    { _id: "6384a061ec416dba947769ac" },
    { $set: { list: data.list } },
    { upsert: true }
  )
return res
}