// Packages
const express = require('express');
const bcrypt = require('bcryptjs');
//Routers
const usersRouter = require('./users/users-router');
const taskRouter = require('./tasks/tasks-router');
const listsRouter = require('./lists/lists-router');
// Models
const users = require('./users-model');

// Server
const server = express();
server.use(express.json());
server.use('/api/users', usersRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/lists', listsRouter);

// Registration
server.post('/api/register', (req, res, next) => {
	const user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	users.create(req.body)
		.then(user => {
			res.status(201).json(user);
		})
		.catch(next);
})

// Login
server.post('/api/login', (req, res, next) => {
	const { username, password } = req.body;

	users.getById(username)
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				res.json({ message: 'Welcome back!' });
			} else {
				res.status(401).json({ message: 'Invalid credentials.' })
			}
		})
		.catch(next);
})

// Exports
module.exports = server;