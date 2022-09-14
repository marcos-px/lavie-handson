const Psicologos = require("../models/Psicologos");
const bcrypt = require("bcryptjs");

const psicologosController = {
  async listarPsicologos(req, res) {
    try {
      let array = {};
      const listaDePsicologos = await Psicologos.findAll();

      if (listaDePsicologos.length == 0) {
        return res.status(200).json(array);
      }
      res.status(200).json(listaDePsicologos);
    } catch (error) {
      console.error(error);
    //   res.status(400).send("Ocorreu um erro ao listar os psicologos, contate o suporte.");
     }
  },

  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;
      const newsenha =  bcrypt.hashSync(senha, 10);
      
      const autenticaEmail = await Psicologos.count({
        where:{
            email
        }
    });

        if (autenticaEmail){
            return res.status(400).send("Email já cadastrado!")
        }

      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: newsenha,
        apresentacao,
      });
      if (novoPsicologo.length == 0) {
        return res.status(400).send("Dados não informados.");
      }

      return res.status(201).json(novoPsicologo);
    } catch (error) {
      console.error(error);
      res.status(400).send(" Ocorreu um erro ao cadastrar o psicologo, contate o suporte.");
    }
  },

  async deletarPsicologo(req, res) {

      try {
        const { id } = req.params;

const destroyPsicologo = await Psicologos.findByPk(id)

if (!destroyPsicologo){
    return res.status(404).send("Id não encontrado!");
};

const deletaPsicologo = await Psicologos.destroy({
    where:{
        psicologo_id: id,
    }
})
    return res.status(201).json("Psicólogo deletado com sucesso!")


    } catch (error) {
console.error(error);
return res.status(404).json("Ocorreu um erro na requisição ao deletar, contate o suporte!")
    }
},

  async atualizaPsicologo(req,res){

    try {
        const { id } = req.params;
        const {nome,email,senha,apresentacao} = req.body;
        const newsenha =  bcrypt.hashSync(senha, 10);
        const PsicologoAtualizado = await Psicologos.update({
          nome,
          email,
          senha:newsenha,
          apresentacao
    },{
        where:{
            psicologo_id : id
        }
    });

    const mostraPsicologo = await Psicologos.findByPk(id)

        if (!mostraPsicologo){
            return res.status(400).send("Id não encontrado!");
        } else{res.status(200).json(mostraPsicologo)

        }
        
    } catch (error) {
        console.error(error);
        res.status(400).json("Ocorreu um erro na requisição, contate o suporte!")
        
    };
  },
  async listaPsicologoID(req,res){
    try {
        const { id } = req.params;
        const psicologoSalvo = await Psicologos.findOne({
            where:{
               psicologo_id : id
            }
        });

        if(!psicologoSalvo){
            return res.status(404).send("ID não encontrado!")
        } else {
            return res.status(200).json(psicologoSalvo);}
    } catch (error) {
        console.error(error);
        return res.status(400).send("Ocorreu um erro, contate o suporte!");
    };
  } 


};

module.exports = psicologosController;