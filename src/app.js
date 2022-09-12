const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/handleError');
const PORT = process.env.PORT || 3000;

const db = require('./database');

const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);
app.use(handleError);

app.listen(PORT, () => console.log(`Servidor Rodando na porta ${PORT}.`));