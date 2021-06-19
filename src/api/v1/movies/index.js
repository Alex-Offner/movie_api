const { Router } = require('express');
const movieControllers = require('./movies.controller');

const movieRouter = Router();


moviewRouter
  .route('/')
  .get(passport.authenticate("jwt", { session: false }), movieControllers.getAllMovies);

module.exports = movieRouter