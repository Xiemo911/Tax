import mongoose from "mongoose";
import State from "../models/State.js";

  export default function submitRoute(app){
 
    app.post(
        "/api/submittax",
        async function (req, res, next) {
            const st = await State.find({abbreviation: req.body.state})
            // const taxB =              TAX BRACKET
            const kk = parseFloat(req.body.income) * (1 - parseFloat(st[0].highestIncomeTaxBracket))
            
          await console.log("FIND: ", kk);
        },
       
      );  

      app.get("/api/get_forecast", async(req, res) => {
        const getApiData = await Forecast.findById("6384a061ec416dba947769ac");
        res.json(getApiData)
      });
}


