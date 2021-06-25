const { Router } = require("express");
const userControllers = require("./user.controller");

const userRouter = Router();

userRouter
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    movieControllers.getAllMovies
  )

module.exports = userRouter;
