
import {getApiData} from "../services/getWeather.js"
import Weather from "../models/Weather.js"


export async function updateWeather() {
   const data = await getApiData()
    const res = await Weather.updateOne(
    { _id: "63849ce0cb9fde750834a3f8" },
    {
      $set: {
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
        apiName: "Weather",
      },
    },
    { upsert: true }
  )
return res
}