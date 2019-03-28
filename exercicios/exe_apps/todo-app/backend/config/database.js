// IMPORTS
const mongoose = require('mongoose');

// Config Promise global
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://mongo:27017/todo', { useNewUrlParser: true });
