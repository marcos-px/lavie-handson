const { Atendimentos, Pacientes, Psicologos } = require("../models");

const atendimentoController = {
    listaAtendimentos: async (req,res) => {
        try {
            const findAllAtendimentos = await Atendimentos.findAll({
                include: [{
                    model: Pacientes,
                    attributes: ["nome"]
                },
                {
                    model: Psicologos,
                    attributes: ["nome"]
                }]
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
            res.status(404).json("Deu ruim ao buscar esse atendimento, contate o suporte!")
        }
    },

    async postAtendimento(req,res) {
        try {
            const { paciente_id, data_atendimento, observacao } = req.body;

            const procuraPacientePorID = await Pacientes.findByPk(paciente_id);

            if(!procuraPacientePorID) {
                return res.status(404).json("paciente não encontrado!");
            }

            const cadastraAtendimento = await Atendimentos.create({
                paciente_id,
                data_atendimento,
                observacao,
                psicologo_id,
            });

            res.status(200).json(cadastraAtendimento);
        } catch (error) {
            res.status(400).json("Deu ruim, contate o suporte")
        }
    }
};

module.exports = atendimentoController;