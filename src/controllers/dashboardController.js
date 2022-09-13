const {Atendimentos, Psicologos, Pacientes} = require("../models")

const dashboardController = {
    async countPacientes(req,res) {
        const numeroPacientes = await Pacientes.count({
            })
            res.status(200).json(`No nosso sistema tem ${numeroPacientes} pacientes!`)
    },

    async countAtendimentos(req,res){
        const atendimentos = await Atendimentos.count()
        res.status(200).json(`Temos ${atendimentos} atendimentos cadastrados!`)
    },

    async countPsicologos(req,res){
        const psicologos = await Psicologos.count()
        res.status(200).json(`Temos ${psicologos} atendimentos cadastrados!`)
    },
    async mediaAtendimentos(req,res){
        const atendimentos = await Atendimentos.count()
        const psicologos = await Psicologos.count()
        const media = (atendimentos/psicologos)
        res.status(200).json(`A média de atendimentos por psicólogos é de ${media} atendimentos!`)
    }
}
module.exports = dashboardController;