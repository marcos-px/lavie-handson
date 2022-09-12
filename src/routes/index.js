const express = require("express");

const requestLog = require("../middlewares/requestLog");

const authLoginValidation = require('../validations/auth/login');
const loginController = require('../controllers/loginController');
const routes = express.Router();


routes.post('/login', requestLog, authLoginValidation, loginController.login);

module.exports = routes;