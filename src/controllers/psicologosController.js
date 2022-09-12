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
            const {nome,email,senha,apresentacao} = req.body;
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha,
                apresentacao,
            });
            if(novoPsicologo.length== 0){
                return res.status(400).send("Dados não informados.")
            }
               
            return res.status(201).json(novoPsicologo);
        }catch(error){
            console.error(error);
            res.status(400).send(" Ocorreu um erro ao cadastrar o psicologo, contate o suporte.");
        }
    },

    async deletarPsicologo(req,res){
        try {
            const { id } = req.params;

    const destroyPsicologo = await Psicologos.findByPk(id)

    if (!destroyPsicologo){
        return res.status(404).send("Id não encontrado!");
    };

    const deletaPsicologo = await Psicologos.destroy({
        where:{
            psicologo_id: id
        }
    });
    
    return res.status(204).json(`Psicologo ${ deletaPsicologo} deletado com sucesso!`);
    

        } catch (error) {
    console.error(error);
    return res.status(404).json("Ocorreu um erro na requisição ao deletar, contate o suporte!")
        }
    }

   
    

};

module.exports = psicologosController;