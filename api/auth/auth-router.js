// Imports
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const users = require('../users/users-model');
const { checkUserExists, validateEmail } = require('./auth-middleware');

// Registration
router.post('/register', validateEmail, (req, res, next) => {
	const user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	users.create(user)
		.then(newUser => {
			res.status(201).json(newUser);
		})
		.catch(next);
});

// Login
router.post('/login', checkUserExists, (req, res, next) => {
	const { password } = req.body;

	if (bcrypt.compareSync(password, req.user.password)) {
		req.session.user = req.user;
		res.json({ message: 'Welcome back!' });
	} else {
		res.status(401).json({ message: 'Invalid credentials.' })
	}
});

// Logout
router.get('/logout', (req, res, next) => {
	if (req.session.user) {
		req.session.destroy(err => {
			if (err) {
				next({ message: 'Error logging out.' });
			} else {
				res.json({ message: 'You have successfully logged out.'});
			}
		});
	} else {
		res.json({ message: 'No session.' });
	}
});

// Exports
module.exports = router;
