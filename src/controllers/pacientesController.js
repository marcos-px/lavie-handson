const Pacientes = require("../models/Pacientes");

const pacientesController = {
    listarPacientes: async (req, res) =>{
        try {
            const array = {};
        const listaDePacientes = await Pacientes.findAll({

        });
        res.status(200).json(listaDePacientes);
        } catch (error) {
            res.status(400).send("deu ruim , chame o suporte")
        }
        
    }
};

module.exports = pacientesController;

