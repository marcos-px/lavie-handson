const express = require("express");

const atendimentoController = require("../controllers/atendimentoController");
const middlewareAuth = require("../middlewares/auth")

const pacientesController = require("../controllers/pacientesController");
const dashboardController = require("../controllers/dashboardController");

const routes = express.Router();


// Rotas de atendimento

routes.get("/atendimentos", atendimentoController.listaAtendimentos);
routes.get("/atendimento/:id", atendimentoController.buscaAtendimentoEspecifico);
routes.post("/atendimento",middlewareAuth,atendimentoController.postAtendimento);

// Rotas de pacientes

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listaPacienteID);
routes.post("/pacientes", pacientesController.cadastraPaciente);
routes.put("/pacientes/:id", pacientesController.atualizaPaciente);
routes.delete("/pacientes/:id", pacientesController.deletaPaciente);

// Rotas de dashboard

routes.get("/dashboard/numero-pacientes",dashboardController.countPacientes);
routes.get("/dashboard/numero-atendimentos",dashboardController.countAtendimentos);
routes.get("/dashboard/numero-psicologos",dashboardController.countPsicologos);
routes.get("/dashboard/media-atendimentos",dashboardController.mediaAtendimentos);


module.exports = routes;