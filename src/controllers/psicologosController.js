const Psicologos  = require("../models/Psicologos");

const psicologosController = {

    async listarPsicologos (req,res) {
        try {
        let array = {};
        const listaDePsicologos = await Psicologos.findAll();

        if(listaDePsicologos.length==0){
            return res.status(400).json(array);
        }
        res.status(200).json(listaDePsicologos)

        } catch (error) {
            console.error(error);
            res.status(400).send("Deu ruim! Chame o suporte!");
            
        }

    },

    async cadastrarPsicologo(req,res){
        try{
            const {nome,email,senha,apresentação} = req.body;
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha,
                apresentação
            });
            if(novoPsicologo.length== 0){
                return res.status(400).send("Dados não informados.")
            }
               
            return res.status(201).json(novoPsicologo);
        }catch(error){
            console.error(error);
            res.status(400).send(" Ocorreu um erro ao cadastrar o psicologo, contate o suporte.");
        }
    }

};

module.exports = psicologosController;