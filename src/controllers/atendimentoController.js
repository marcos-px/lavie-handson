const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
    "Atendimentos",
    {
        atendimento_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
                
            }
        },
        data_atendimento: {
            type: DataTypes.DATE,
        },
        observacao:{
            type: DataTypes.STRING,
        },
        
    }

);