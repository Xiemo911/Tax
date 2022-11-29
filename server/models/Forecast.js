
import mongoose from "mongoose";
const Forecast = mongoose.model("apiForecastSchema", {
    list: { type: Array },
    apiName: { type: String },
  });
  export default Forecast