const express = require('express');
const app = express();

module.exports = app;

const route = require('../app/routes/route-index');
route(app);