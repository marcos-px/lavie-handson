const db = require('../database');
const {DataTypes} = require('sequelize')
const Psicologo = db.define(
    "Psicologo",
    {
        psicologo_id:{
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncriment: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        apresentacao:{
            type: DataTypes.STRING,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "psicologo",
    }
);
module.exports = Psicologo;
