const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");
const Psicologo = require("../models/Psicologos");

const loginController = {
    async login(req, res){
        const { email, senha } = req.body
        try {
            const usuario = await Psicologo.findOne({
                where: {
                    email, 
                }
            }); 
            // if(!usuario){
                // return res.status(400).json("Email nao cadastrado");
            // }
    
            if(!bcrypt.compareSync( senha, usuario.senha)){
                return res.status(401).json("Email ou senha invalidos, verifique e tente novamente");
            }
    
            const token = jwt.sign({
                psicologo_id: usuario.psicologo_id, 
                email: usuario.email, 
                nome: usuario.nome,
            }, 
            secret.key,
        );
            return res.satus(200).json(token);
        } catch (error) {
            return res.status(400).send("Erro, contate o suporte.")
        }
    }
};

module.exports = loginController;