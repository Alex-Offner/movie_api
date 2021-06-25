const { Router } = require("express");
const actorsControllers = require("./actors.controller");

const actorsRouter = Router();

actorsRouter
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    actorsControllers.getAllActors
  )
  .route("/:Name")
  .get(
    passport.authenticate("jwt", { session: false }),
    actorsControllers.getActorByName
  )

module.exports = actorsRouter;
