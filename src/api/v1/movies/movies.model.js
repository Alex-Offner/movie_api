const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let movieSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String,
    Birth: Number,
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
  },
  Actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  ImagePath: String,
  Featured: Boolean
});

let Movie = mongoose.model("Movie", movieSchema);
module.exports.Movie = Movie;
