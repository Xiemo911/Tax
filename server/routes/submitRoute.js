import mongoose from "mongoose";
import State from "../models/State.js";
import Bracket from "../models/Bracket.js";
import getTax from "../services/getTax.js";
export default function submitRoute(app) {


  app.post("/api/submittax", async function (req, res, next) {
    getTax(req.body.status, req.body.income, req.body.state)

  });
}
