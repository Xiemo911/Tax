import mongoose from "mongoose";
import State from "../models/State.js";
import Bracket from "../models/Bracket.js";
import getTax from "../services/getTax.js";
export default function submitRoute(app) {


  app.post("/api/submittax", async function (req, res, next) {
    console.log(req.body)
   const re =  await getTax(req.body.status, req.body.income, req.body.state)
   var afterTax = {
    amount: await getTax(req.body.status, req.body.income, req.body.state),
  };
   await res.send(afterTax)
  });
}
