const express = require("express");
const routes = require("./src/routes")
const PORT = process.env.PORT || 3000;

const db = require("./src/database");

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
