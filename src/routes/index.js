const express = require("express");
const psicologosController = require("../controllers/psicologosController");

const routes = express.Router();


routes.get("/psicologos", psicologosController.listarPsicologos);

routes.post("/psicologos",psicologosController.cadastrarPsicologo);








module.exports = routes;