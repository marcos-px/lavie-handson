const express = require("express");


const pacientesController = require("../controllers/pacientesController")

const routes = express.Router();

routes.get("/pacientes", pacientesController.listarPacientes);
module.exports = routes;