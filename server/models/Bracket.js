import mongoose from "mongoose"

const BracketSchema = mongoose.Schema({
    status:  {type: String},
    abbreviation: {type : String},
    bracket: {min: {type: Number}, max: {type: Number}}, 
    rate: { type: String}
})

const Bracket = mongoose.model("Bracket", BracketSchema )
export default Bracket