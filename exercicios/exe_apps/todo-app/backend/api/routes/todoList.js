const express = require('express');

module.exports = app => {
  // ROUTER
  const router = express.Router();
  app.use('/api', router);

  // todoList Routes
  const todoService = require('../services/todoList');
  todoService.register(router, '/todos');
};
