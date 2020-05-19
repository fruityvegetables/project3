const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  //these are going to need to change.
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", plantSchema);

module.exports = Post;
