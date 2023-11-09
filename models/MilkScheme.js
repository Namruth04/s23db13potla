const mongoose = require("mongoose")
const MilkScheme = mongoose.Schema({
name: String,
type: String,
price: Number
})
module.exports = mongoose.model("Milk",
MilkScheme)