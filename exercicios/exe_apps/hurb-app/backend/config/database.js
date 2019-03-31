// IMPORTS
const mongoose = require('mongoose');
const app = require('./server');
const port = process.env.PORT || 8000;

// Config Promise global
mongoose.Promise = global.Promise;

const uri = {
  npm: 'mongodb://localhost/todo',
  docker: 'mongodb://mongo:27017/todo',
};

const options = {
  useNewUrlParser: true,
  autoIndex: false
};

// connectDB
module.exports = mongoose.connect(uri.docker, options).then(
  // init app
  app.listen(port, () => console.log(`[BackendAPI] running on port: ${port}`))
).catch(error => {
  console.log(error);
});


module.exports = app;
