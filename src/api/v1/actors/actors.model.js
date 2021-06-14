const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let actorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Bio: String,
  Birth: Number,
  Death: Number,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});

let Actor = mongoose.model("Actor", actorSchema);
module.exports.Actor = Actor;
