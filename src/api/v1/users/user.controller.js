const UserService = require('./user.service')

const createUser = async (req,res) =>{
  const inputData = req.body
  try {
    const createdUser = await UserService.createUser(inputData)
    res.status(201).json(createdUser)
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
}


const updateUserByUsername = async (req,res) =>{
  const inputData = req.body
  const username = req.params.username
  try {
    const updatedUser = await UserService.updateUserByUsername(inputData, username)
    res.status(201).json(updatedUser)
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
}


module.exports ={
  createUser,
  updateUserByUsername
}