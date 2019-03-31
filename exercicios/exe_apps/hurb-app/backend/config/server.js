// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');
const routes = require('../api/routes/currency');

// Server instance
const app = express();

// Register Models
Currency = require('../api/models/currency');

// Config Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

// Routes register
routes(app);

module.exports = app;
