const mongoose = require("mongoose")
const MilkScheme = new mongoose.Schema({
name: String,
type: {type:String,minlength:4,maxlength:56,required:true},
price: {type:Number,min:4,max:4444,required:true}
})
module.exports = mongoose.model("Milk",
MilkScheme)