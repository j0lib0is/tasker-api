// Imports
const express = require('express');
const users = require('./users-model');
const router = express.Router();

// Endpoints
router.get('/:id', (req, res, next) => {
	users.getById(req.params.id)
		.then(user => {
			res.json(user);
		})
		.catch(next);
})

router.put('/:id', (req, res, next) => {
	users.update(req.params.id, req.body)
		.then(user => {
			res.json(user);
		})
		.catch(next);
})

// Exports
module.exports = router;