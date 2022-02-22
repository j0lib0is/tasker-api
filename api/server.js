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

// Session Config
const sessionConfig = {
  name: 'theGreatestSession',
  secret: 'the super-secret secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false
};

server.use(session(sessionConfig));

// Routers
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/lists', listsRouter);

// Exports
module.exports = server;