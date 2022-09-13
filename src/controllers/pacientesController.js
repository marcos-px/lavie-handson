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
            console.error(error);
            res.status(400).send("Deu ruim! Chame o suporte!")
            
        }
    },

    async cadastraPaciente(req,res){ //aperfeiçoar
        try {
            const {nome, idade, email} = req.body;

            const autenticaEmail = await Pacientes.count({
                where:{
                    email
                }
            });

                if (autenticaEmail){
                    return res.status(400).send("Email já cadastrado!")
                }

            const newPaciente = await Pacientes.create({
                nome,
                idade,
                email,
            });
            return res.status(201).json(newPaciente);
        } catch (error) {
            console.error(error);
            res.status(404).send("Ocorreu um erro na requisição! Contate o suporte");
            
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
            console.error(error);
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
        console.error(error);
        res.status(400).json("Ocorreu um erro na requisição, contate o suporte!")
        
    }
    },

        async deletaPaciente(req,res){
            try {
                const { id } = req.params;

        const destroyPaciente = await Pacientes.findByPk(id)

        if (!destroyPaciente){
            return res.status(404).send("Id não encontrado!");
        };

        const deletaPaciente = await Pacientes.destroy({
            where:{
                paciente_id: id,
            }
        })
            return res.status(201).json(`Paciente ${ destroyPaciente } deletado com sucesso!`)
        

            } catch (error) {
        console.error(error);
        return res.status(404).json("Ocorreu um erro na requisição ao deletar, contate o suporte!")
            }
        }

};

module.exports = pacientesController;