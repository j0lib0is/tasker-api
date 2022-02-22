// Imports
const router = require('express').Router();
const users = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

// Endpoints
router.get('/', (req, res, next) => {
	users.get()
		.then(users => {
			res.json(users);
		})
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	users.getById(req.params.id)
		.then(user => {
			res.json(user);
		})
		.catch(next);
});

// Exports
module.exports = router;