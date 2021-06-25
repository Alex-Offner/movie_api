const { Router } = require('express');
const movieControllers = require('./movies.controller');

const movieRouter = Router();


moviewRouter
  .route('/')
  .get(passport.authenticate("jwt", { session: false }), movieControllers.getAllMovies)
  .route('/:Genre')
  .get(passport.authenticate("jwt", { session: false }), movieControllers.getGenreByName)
  .route('/:Title')
  .get(passport.authenticate("jwt", { session: false }), movieControllers.getMovieByTitle)
  .route('/:Director')
  .get(passport.authenticate("jwt", { session: false }), movieControllers.getDirectorByName)


module.exports = movieRouter