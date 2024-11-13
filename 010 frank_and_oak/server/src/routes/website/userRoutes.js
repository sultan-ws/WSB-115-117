const express = require('express');
const { genrateOtpWeb, registerUser } = require('../../controllers/controller');

const userRouter = express.Router();


userRouter.post('/genrate-otp', genrateOtpWeb);
userRouter.post('/register-user', registerUser);

module.exports = userRouter;