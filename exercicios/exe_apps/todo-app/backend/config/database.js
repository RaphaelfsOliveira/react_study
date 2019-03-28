// IMPORTS
const mongoose = require('mongoose');

// Config Promise global
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });
