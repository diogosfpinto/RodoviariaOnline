const express = require('express');
const app = express();

//Servindo com arquivos publicos
app.use(express.static('src'))

module.exports = app;

const route = require('../routes/route-index');
route(app);