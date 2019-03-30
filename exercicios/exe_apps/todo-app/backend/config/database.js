// IMPORTS
const mongoose = require('mongoose');

// Config Promise global
mongoose.Promise = global.Promise;

// npm run
// module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });

// docker-compose
module.exports = mongoose.connect('mongodb://mongo:27017/todo', { useNewUrlParser: true });
