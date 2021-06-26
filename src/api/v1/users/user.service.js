 const Users = require("./user.model")

const createUser = async (inputData) =>{
  const {username, password, email,birthday } = inputData
 let hashedPassword = Users.hashPassword(password);
 const payload = {
            username: username,
            password: hashedPassword,
            email: email,
            birthday: birthday
          }
const user  = await Users.create(payload)
      return user
}

const updateUserByUsername = async(inputData, username)=>{
    const {username, password, email,birthday } = inputData
   let hashedPassword = Users.hashPassword(password);
   const updatedUser = await Users.findOneAndUpdate(
      { username},
      {
        $set: {
           username: username,
            password: hashedPassword,
            email: email,
            birthday: birthday
        }
      },
      { new: true })

      return updatedUser
    }


const addMovieToUserFavorite = async (username, MovieID) => {
    const movieAddedToUser = await  Users.findOneAndUpdate(
      { username:username },
      {
        $addToSet: { favouriteMovies: MovieID }
      },
      { new: true })
       return movieAddedToUser
    }



const removeUserFromFavoriteList = async (username, MovieID) => {
    const removedUserFromFavorite = await Users.findOneAndUpdate(
      { username: username },
      {
        $pull: { favouriteMovies:MovieID }
      },
      { new: true })

      return removedUserFromFavorite
}

const deleteUserByUsername = async (username) => {
  const deletedUser = await  Users.findOneAndRemove({ username: username })
  return deleteUser
}

module.exports = {
createUser,
updateUserByUsername,
addMovieToUserFavorite,
removeUserFromFavoriteList,
deleteUserByUsername
}