const express = require("express");
const psicologosController = require("../controllers/psicologosController");

const requestLog = require("../middlewares/requestLog");
const authLoginValidation = require('../validations/auth/login');
const loginController = require('../controllers/loginController');
const atendimentoController = require("../controllers/atendimentoController");
const dashboardController = require('../controllers/dashboardController');
const validaPsicologo = require("../validations/psicologos/create");
const validaPaciente = require("../validations/pacientes/create");
const validaAtendimentos = require("../validations/atendimentos/create");
const middlewareAuth = require("../middlewares/auth");

const pacientesController = require("../controllers/pacientesController");

const routes = express.Router();


//Rota de login
routes.post('/login', requestLog, authLoginValidation, loginController.login);

//Rotas de Psicólogos

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologo/:id",psicologosController.listaPsicologoID);
routes.post("/psicologo",validaPsicologo,psicologosController.cadastrarPsicologo);
routes.delete("/psicologo/:id",psicologosController.deletarPsicologo);
routes.put("/psicologo/:id",validaPsicologo,psicologosController.atualizaPsicologo);

// Rotas de atendimento

routes.get("/atendimentos", atendimentoController.listaAtendimentos);
routes.get("/atendimento/:id", atendimentoController.buscaAtendimentoEspecifico);
routes.post("/atendimento",atendimentoController.postAtendimento);

// Rotas de pacientes

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/paciente/:id", pacientesController.listaPacienteID);
routes.post("/paciente",validaPaciente, pacientesController.cadastraPaciente);
routes.put("/paciente/:id",validaPaciente, pacientesController.atualizaPaciente);
routes.delete("/paciente/:id", pacientesController.deletaPaciente);

// Rotas de dashboard

routes.get("/dashboard/numero-pacientes",dashboardController.countPacientes);
routes.get("/dashboard/numero-atendimentos",dashboardController.countAtendimentos);
routes.get("/dashboard/numero-psicologos",dashboardController.countPsicologos);
routes.get("/dashboard/media-atendimentos",dashboardController.mediaAtendimentos);


module.exports = routes;