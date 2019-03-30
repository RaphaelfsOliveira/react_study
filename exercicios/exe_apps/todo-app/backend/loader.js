require('./config/server');
const app = require('./config/database');
require('./api/routes/todoList')(app);
require('./api/tasks/currency');
