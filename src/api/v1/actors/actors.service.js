const Actors = require("./actor.model");

const getAllActors = async () => {
  const foundActors = await Actors.find({})
  return foundActors;
}

//Add endpoint path here?
const getActorByName = async () => {
  const foundActor = await Actors.find(
    { Name: req.params.Name }
  );
  return foundActor;
}

module.exports = {
  getAllActors,
  getActorByName
}