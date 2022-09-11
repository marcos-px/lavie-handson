const express = require("express");


const pacientesController = require("../controllers/pacientesController")

const routes = express.Router();

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listaPacienteID);
routes.post("/pacientes", pacientesController.cadastraPaciente)
routes.put("/pacientes/:id", pacientesController.atualizaPaciente)
routes.delete("/pacientes/:id", pacientesController.deletaPaciente)


module.exports = routes;