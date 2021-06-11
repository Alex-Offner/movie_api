//Loading the express and morgan module into the file
const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cors = require("cors");
require("./passport");

const { check, validationResult } = require("express-validator");

//app allows you to call the express module accordingly
const app = express();
app.use(bodyParser.json());

/* With express(), call the middleware layer morgan that uses the common parameter
to log data such as IP address, time of request and request method; this will
happen with every request*/
app.use(morgan("common"));

//call cross-aplication resource sharing (CORS)
app.use(cors());

//imports auth file into index.js, (app) lets auth access express
let auth = require("./auth")(app);

/* With express(), call the middleware layer express.static that looks for the
"public" folder and routes all requests to this folder to check if for example
a file is availabe */
app.use(express.static("public"));

//require mongoose and models
const mongoose = require("mongoose");
const Models = require("./models.js");

const Movies = Models.Movie;
const Users = Models.User;
const Actors = Models.Actor;

//connecting to my database [myFlixDB]
/*mongoose.connect("mongodb://localhost:27017/[myFlixDB]", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); */

//connecting to my online database on mongodb.com
mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Get all movies
app.get(
  "/movies",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Movies.find()
      .then(movies => {
        res.status(201).json(movies);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Get a movie by moviename
app.get(
  "/movies/:Title",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Movies.findOne({ Title: req.params.Title })
      .then(movie => {
        if (movie) {
          res.json(movie);
        } else {
          res.send("Movie doesn't exist!");
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Get a genre by name
app.get(
  "/movies/Genre/:Name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Movies.findOne({ "Genre.Name": req.params.Name })
      .select("Genre")
      .then(genre => {
        if (genre) {
          res.json(genre);
        } else {
          res.send("Genre doesn't exist!");
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Get a director by name
app.get(
  "/movies/Director/:Name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Movies.findOne({ "Director.Name": req.params.Name })
      .select("Director")
      .then(director => {
        if (director) {
          res.json(director);
        } else {
          res.send("Direcor doesn't exist!");
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Get all actors
app.get(
  "/actors",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Actors.find()
      .then(actors => {
        res.status(201).json(actors);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Get an actor by Name
app.get(
  "/actors/:Name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Actors.findOne({ Name: req.params.Name })
      .then(actor => {
        if (actor) {
          res.json(actor);
        } else {
          res.send("Actor doesn't exist!");
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//POST a new user with a username
/* A JSON format is required
{ ID: Integer,
username: String,
password: String,
email: String,
birthday: Date
} */

//Another middleware layer that will run on all reqeusts and check for errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error occured. Please check your code!");
});

//looks for pre-configured port number. If nothig found, sets part to 0.0.0.0
const port = process.env.PORT ||4000;
app.listen(port, "0.0.0.0", () => {
  console.log("Listening on Port " + port);
});
