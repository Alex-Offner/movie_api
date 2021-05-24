const mongoose = require("mongoose");

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

let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: Date,
  favouriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});

let actorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Bio: String,
  Birth: Number,
  Death: Number,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});

let Movie = mongoose.model("Movie", movieSchema);
let User = mongoose.model("User", userSchema);
let Actor = mongoose.model("Actor", actorSchema);

module.exports.Movie = Movie;
module.exports.User = User;
module.exports.Actor = Actor;
