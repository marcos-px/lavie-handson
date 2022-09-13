const express = require("express");
const psicologosController = require("../controllers/psicologosController");

const routes = express.Router();


routes.get("/psicologos", psicologosController.listarPsicologos);

routes.get("/psicologos/:id",psicologosController.listaPsicologoID);

routes.post("/psicologos",psicologosController.cadastrarPsicologo);

routes.delete("/psicologos/:id",psicologosController.deletarPsicologo);

 routes.put("/psicologos/:id",psicologosController.atualizaPsicologo);




module.exports = routes;