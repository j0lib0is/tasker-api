// Imports
const router = require('express').Router();
const users = require('./users-model');
const { restricted } = require('../auth/auth-router');

// Endpoints
router.get('/:id', restricted, (req, res, next) => {
	users.getById(req.params.id)
		.then(user => {
			res.json(user);
		})
		.catch(next);
})

router.put('/:id', restricted, (req, res, next) => {
	users.update(req.params.id, req.body)
		.then(user => {
			res.json(user);
		})
		.catch(next);
})

// Exports
module.exports = router;