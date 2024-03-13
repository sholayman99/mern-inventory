const express = require("express");
const routes = express.Router();
const authVerify = require("../middlewares/authVerify");
const userController = require('../controllers/users/userController');

//users

routes.post('/registration' , userController.registration);
routes.post('/login' , userController.login);
routes.get('/userDeatils', authVerify , userController.userDeatils);
routes.post('/profileUpdate', authVerify , userController.profileUpdate);
routes.get('/verifyEmail/:email', userController.verifyEmail);
routes.get('/verifyOtp/:email/:otp', userController.verifyOtp);
routes.post('/resetPass', userController.resetPass);


module.exports = routes;