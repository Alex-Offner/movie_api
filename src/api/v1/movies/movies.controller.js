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

//Add endpoint? How to access params?
const getMovieByTitle = async (req, res, Title) => {
  try {
    const foundMovie = await moviesServices.getMovieByTitle(
      { Title: req.params.Title }
    )
    return res.status(201).json(foundMovie)
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error);
  }
}

//Arguements for async function???
const getGenreByName = async (req, res, Genre.Name) => {
  try {
    const foundGenre = await moviesServices.getGenreByName(
      { "Genre.Name": req.params.Name }
    )
    if (Genre.Name) {
      return res.status(201).json(foundGenre)
    } else {
      return res.send("Genre doesn't exists!");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error);
  }
}

const getDirectorByName = async (req, res, Director.Name) => {
  try {
    const foundDirector = await moviesServices.getDirectorByName(
      { "Director.Name": req.params.Name }
    )
    if (Director.Name) {
      return res.status(201).json(foundDirector)
    } else {
      return res.send("Director doesn't exists!");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error " + error);
  }
}

module.exports = {
  getAllMovies,
  getMovieByTitle,
  getGenreByName,
  getDirectorByName
};
