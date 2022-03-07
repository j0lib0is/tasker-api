// Import Packages
const express = require('express');
const session = require('express-session');

// Import Routers
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const taskRouter = require('./tasks/tasks-router');
const listsRouter = require('./lists/lists-router');

// Server
const server = express();
server.use(express.json());

// Routers
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/lists', listsRouter);

// Global error handler
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customError: 'Houston, we have a problem.',
    message: err.message,
    stack: err.stack
  });
});

// Exports
module.exports = server;