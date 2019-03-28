const app = require('./config/server');
require('./api/routes/todoList')(app);
require('./config/database');
