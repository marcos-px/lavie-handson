const { Psicologos } = require("../models")

const psicologosController = {

    async listarPsicologos (req,res) {
        try {
        let array = {};
        const listaDePsicologos = await Psicologos.findAll({    });

        if(listaDePsicologos.length==0){
            return res.status(400).json(array);
        }
        res.status(200).json(listaDePsicologos)

        } catch (error) {
            console.error(error);
            res.status(404).send("Deu ruim! Chame o suporte!");
            
        }

    },

    async cadastrarPsicologo(req,res){
        try {
            
            const {nome, email, senha, apresentacao, } = req.body;
            const novoPsicologo = await Psicologos.create({
                nome, 
                email,
                senha,
                apresentacao
            });

            if({nome, email, senha, apresentacao}.length == 0){
                return res.status(400).send("Dados não informados, gentilza informar dados obrigatórios!")
            }

            return res.status(201).json(novoPsicologo);
        } catch (error) {
            console.error(error);
            res.status(400).send("Ocorreu um erro ao cadastrar o psicologo, contate o suporte.")
            
        }
    }

};

module.exports = psicologosController;