// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

// Server instance and port
const app = express();
const port = process.env.PORT || 8000;


// Config Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

module.exports = app;
