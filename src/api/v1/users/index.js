const { Router } = require('express');
const { validate } = require('../../../helpers/validation');

const UserController = require('./user.controller');
const { createUserValidation, updateUserValidation } =  require('./user.validation');

const userRouter = Router();

userRouter.route('/').post(validate(createUserValidation), UserController.createUser);
userRouter.route('/:username').post(validate(updateUserValidation), passport.authenticate("jwt", { session: false }), UserController.updateUserByUsername);

module.exports = userRouter;
