const express = require("express");
const psicologosController = require("../controllers/psicologosController");

const routes = express.Router();


routes.get("/psicologos", psicologosController.listarPsicologos);

routes.post("/psicologos",psicologosController.cadastrarPsicologo);

routes.delete("/psicologos/:id",psicologosController.deletarPsicologo);






module.exports = routes;