// Imports
const express = require('express');
const taskRouter = require('./tasks/router');
const listsRouter = require('./lists/router');

// Server
const server = express();
server.use(express.json());

// Routers
server.use('/api/tasks', taskRouter);
server.use('/api/lists', listsRouter);

// Exports
module.exports = server;