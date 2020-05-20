const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  note: String,
  date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;