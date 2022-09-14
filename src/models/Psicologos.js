const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = db.define(
    "Psicologos",
    {
        psicologo_id: {
            type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique:true
        },
        nome:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        senha:{
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

module.exports = Psicologos;