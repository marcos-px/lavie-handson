const express = require("express");
const routes = require("./src/routes");
const PORT = process.env.PORT || 3000;
const requestLog = require("./src/middlewares/requestLog")

const handleError = require("./src/middlewares/handleError")

const db = require("./src/database");

const app = express();

db.hasConection();

app.use(express.json());

app.use(requestLog);

app.use(routes);
app.use(handleError);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
