const mongoose = require("mongoose")
const MilkScheme = new mongoose.Schema({
name: String,
type: String,
price: Number
})
module.exports = mongoose.model("Milk",
MilkScheme)