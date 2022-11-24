const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanesSchema = new Schema({
    plan_one:{type: String, required: true, max:200},
    plan_two:{type: String, required: true, max:80},
    plan_three:{type: String, required: true, max:80},
});

module.exports = mongoose.model("planes", PlanesSchema);