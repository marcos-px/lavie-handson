const express = require("express");



const atendimentoController = require("../controllers/atendimentoController");
const middlewareAuth = require("../middlewares/auth")

const routes = express.Router();

//Rotas de atendimento
routes.get("/atendimentos", atendimentoController.listaAtendimentos);
routes.get("/atendimento/:id", atendimentoController.buscaAtendimentoEspecifico);
routes.post("/atendimento",middlewareAuth,atendimentoController.postAtendimento);


module.exports = routes;