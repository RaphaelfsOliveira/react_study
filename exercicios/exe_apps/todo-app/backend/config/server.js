// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');

// Server Init
const app = express();
const port = process.env.PORT || 3003;


// Config Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Backend RESTFull API is running on port ${port}`);
});

module.exports = app;
