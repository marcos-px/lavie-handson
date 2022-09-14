const { Atendimentos, Pacientes, Psicologos } = require("../models");

const atendimentoController = {
    async listaAtendimentos  (req,res) {
        try {
            const findAllAtendimentos = await Atendimentos.findAll({
                include: Pacientes
                
            });
            res.status(200).json(findAllAtendimentos)
        } catch (error) {
            res.status(400).json("Ops, ocorreu um erro ao listar os atendimentos, que tal ligar no suporte?")
            
        }
    },
    
    async buscaAtendimentoEspecifico(req,res){
        try {
            const { id } = req.params;
            const findAtendimento = await Atendimentos.findByPk(id,{
                include: [Psicologos, Pacientes]
            });
        } catch (error) {
            res.status(404).json("Id não encontrado")
        }
    },

    async postAtendimento(req,res) {
        const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

        try {
            
            const cadastraAtendimento = await Atendimentos.create({
                paciente_id,
                data_atendimento,
                observacao,
                psicologo_id,
            });

            const procuraPacientePorID = await Pacientes.findByPk(paciente_id);

            if(!procuraPacientePorID) {
                return res.status(404).json("paciente não encontrado!");
            }

            const procuraPsicologosPorID = await Psicologos.findByPk(paciente_id);

            if(!procuraPsicologosPorID) {
                return res.status(404).json("Psicólogo não encontrado!");
            }

           

            res.status(201).json(cadastraAtendimento);
        } catch (error) {
            console.error(error);
            res.status(400).json("Deu ruim, contate o suporte")
        }
    }
};

module.exports = atendimentoController;