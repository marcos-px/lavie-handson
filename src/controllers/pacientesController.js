const Pacientes = require("../models/Pacientes");

const pacientesController = {
    listarPacientes: async (req,res) =>{
        try {
        let array = {};
        const listaDePacientes = await Pacientes.findAll({
            
        });

        if(listaDePacientes.length==0){
            return res.status(400).json(array);
        }
        res.status(200).json(listaDePacientes);

        } catch (error) {
            res.status(400).send("Deu ruim! Chame o suporte!")
            
        }
    },

    async cadastraPaciente(req,res){ //aperfeiçoar
        try {
            const {nome, idade, email} = req.body;
            const newPaciente = await Pacientes.create({
                nome,
                idade,
                email,
            });
            return res.status(201).json(newPaciente);
        } catch (error) {
            res.status(400).send("Ocorreu um erro na requisição! Contate o suporte");
            
        };
    },
    async listaPacienteID(req,res){
        try {
            const { id } = req.params;
            const pacienteSalvo = await Pacientes.findOne({
                where:{
                    paciente_id : id
                }
            });

            if(!pacienteSalvo){
                return res.status(404).send("ID não encontrado!")
            } else {
                return res.status(200).json(pacienteSalvo);}
        } catch (error) {
            return res.status(400).send("Ocorreu um erro, contate o suporte!");
            
        };
    },

    async atualizaPaciente(req,res){

    try {
        const { id } = req.params;
        const {nome, idade, email} = req.body;

        const pacienteAtualizado = await Pacientes.update({
            nome,
            idade,
            email,
    },{
        where:{
            paciente_id : id
        }
    });

    const mostraPaciente = await Pacientes.findByPk(id)
        if (!mostraPaciente){
            return res.status(400).send("Id não encontrado!");
        } else{res.status(200).json(mostraPaciente)

        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json("Ocorreu um erro na requisição, contate o suporte!")
        
    }
    },


};

module.exports = pacientesController;