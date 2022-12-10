
import mongoose from "mongoose"

const StateSchema = mongoose.Schema({
name: { type: String , unique: true },
abbreviation: { type: String, unique: true},
lowestIncomeTaxBracket: { type: String },
highestIncomeTaxBracket: { type: String },
})

const State = mongoose.model("States", StateSchema )
export default State
