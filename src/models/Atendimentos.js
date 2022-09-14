const db = require("../database");
const { DataTypes } = require("sequelize");


const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes");

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
        createdAt:{
            type: DataTypes.DATE,
        },
        updateAt:{
            type: DataTypes.DATE,
        },
        paciente_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Pacientes,
                key: "paciente_id",
            },
            psicologo_id:{
                type: DataTypes.INTEGER,
                references:{
                    model:Psicologos,
                    key: "psicologo_id",
                },
            }
        }

    },
    {
        tableName: "atendimento",
        timestamps: false
    }
)

module.exports = Atendimentos;
