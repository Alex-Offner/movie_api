const Movies = reuqire("./movies.model");

const getAllMovies = async () => {
  const foundMovies = await Movies.find({})
  return foundMovies;
}

//Add endpoint path here?
const getMovieByTitle = async () => {
  const foundMovie = await Movies.find(
    { Title: req.params.Title }
  );
  return foundMovie;
}

const getGenreByName = async () => {
  const foundGenre = await Movies.find(
    { "Genre.Name": req.params.Name }
  );
  return foundGenre;
}

const getDirectorByName = async () => {
  const foundDirector = await Movies.find(
    { "Director.Name": req.params.Name }
  );
  return foundDirector;
}

module.exports = {
  getAllMovies,
  getMovieByTitle,
  getGenreByName,
  getDirectorByName
}