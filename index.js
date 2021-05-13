//Loading the express and morgan module into the file
const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser");

//app allows you to call the express module accordingly
const app = express();

app.use(bodyParser.json());

//Array of top movies
let movies = [
  {
    title: "The Fountain",
    director: "Darren Aronofsky",
    releaseDate: "November 22, 2006"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    releaseDate: "December 10, 2001"
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    director: "Peter Jackson",
    releaseDate: "December 05, 2002"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    releaseDate: "December 01, 2003"
  },
  {
    title: "Citizen Kane",
    director: "Orson Welles",
    releaseDate: "May 01, 1941"
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseDate: "March 14, 1972"
  },
  {
    title: "Inside Out",
    director: "Peter Docter",
    releaseDate: "May 18, 2015"
  },
  {
    title: "The Farewell",
    director: "Lulu Wang",
    releaseDate: "January 25, 2019"
  },
  {
    title: "Arrival",
    director: "Denis Villeneuve",
    releaseDate: "November 11, 2016"
  },
  {
    title: "Marriage Story",
    director: "Noah Baumbach",
    releaseDate: "November 06, 2019"
  }
];

/* With express(), call the middleware layer morgan that uses the common parameter
to log data such as IP address, time of request and request method; this will
happen with every request*/
app.use(morgan("common"));

/*
app.get("/", (req, res) => {
  res.send("Welcome to my movie favourite movies!");
});
*/

/* With express(), call the middleware layer express.static that looks for the
"public" folder and routes all requests to this folder to check if for example
a file is availabe */
app.use(express.static("public"));

/*
//This GET reqeuest loads the topMovies array as a json
app.get("/movies", (req, res) => {
  res.json(topMovies);
});
*/
//GET request for all the movies
app.get("/movies", (req, res) => {
  res.send("Succesful GET request to return the data of all the movies");
});

/* This is for the "in-memory" array
app.get("/movies", (req, res) => {
  res.json(movies);
});
*/

/* This is for the "in-memory" array
app.get("/movies/:title", (req, res) => {
  res.json(
    movies.find(movie => {
      return movie.title === req.params.title;
    })
  );
});
*/

//GET data searched by movie title
app.get("/movies/:title", (req, res) => {
  res.send("Succesfully get all the data about a specific movie");
});

//GET data about a genre by name
app.get("/movies/genres/:name", (req, res) => {
  res.send("Succesfully get the data about a genre");
});

//GET data about a director by name
app.get("/movies/directors/:name", (req, res) => {
  res.send("Succesfully get the data about a director");
});

//POST a new user with a username
app.post("/users", (req, res) => {
  let newUser = req.body;

  if (!newUser.name || !newUser.username) {
    const message = "Missing name and/or username!";
    res.send(message);
  } else {
    res.send(req.body.username + " was succesfully added.");
  }
});

//PUT a new username for a user
app.put("/users/:username", (req, res) => {
  //search for user by name: let user = users.find(user => { return user.username === req.params.username};)

  //if-else for if user was found or not
  res.send(req.params.username + " was updated.");
});

//Another middleware layer that will run on all reqeusts and check for errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error occured. Please check your code!");
});

//listen for a reqeusts
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
