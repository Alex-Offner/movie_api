const actorsServices = require('./actors.service');

const getAllActors = async (req, res) => {
  try {
    const foundActors = await actorsServices.getAllActors()
    return res.status(201).json(foundActors)
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error);
  }
}

const getActorByName = async (req, res) => {
  const { Name } = req.params
  try {
    const foundActor = await moviesServices.getActorByName(
      { Name }
    )
    return res.status(201).json(foundActor)
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error);
  }
}


module.exports = {
  getAllActors,
  getActorByName
};