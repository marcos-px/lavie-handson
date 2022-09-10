const express = require("express");
const routes = require("./routes")
const PORT = 3000;

const db = require("./database");

const app = express();

db.hasConection();

app.use(express.json());
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
