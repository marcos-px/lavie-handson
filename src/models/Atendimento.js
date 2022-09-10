const db = require("../database");
const { DataTypes } = require("sequelize");

const modelPacientes = require("./Pacientes");
const modelPsicologos = require("./Psicologos");

const Atendimentos = db.define(
    "Atendimentos",{
        atendimento_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_atendimento: {
            type: DataTypes.DATE,
        },
        observacao:{
            type: DataTypes.STRING,
        },
    }
)
