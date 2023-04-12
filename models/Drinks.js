const mongoose = require("mongoose")
const DrinksSchema = mongoose.Schema({
Drinks_name: String,
Drinks_size: String,
cost: Number
})
module.exports = mongoose.model("Drinks",
DrinksSchema)