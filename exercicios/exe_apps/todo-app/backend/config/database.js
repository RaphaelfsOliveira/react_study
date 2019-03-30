// IMPORTS
const mongoose = require('mongoose');

// Config Promise global
mongoose.Promise = global.Promise;

const mongoDB = {
  npm: 'mongodb://localhost/todo',
  docker: 'mongodb://mongo:27017/todo',
};

module.exports = mongoose.connect(mongoDB.docker, { useNewUrlParser: true });
