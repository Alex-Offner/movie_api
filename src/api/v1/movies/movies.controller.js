const movieServices = require('./movies.service');


const getAllMovies = async (req, res) => {
  try {
    const foundMovies = await moviesServices.getAllMovies()
    return res.status(201).json(foundMovies)
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error);
  }


}

module.exports = {
  getAllMovies
};

-pp.get(
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
