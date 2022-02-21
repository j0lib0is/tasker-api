// Imports
const express = require('express');
const lists = require('./lists-model');
const router = express.Router();

// Endpoints
router.get('/', (req, res, next) => {
	lists.get()
		.then(lists => {
			res.json(lists);
		})
		.catch(next);
})

router.get('/:id', (req, res, next) => {
	lists.getById(req.params.id)
		.then(list => {
			res.json(list);
		})
		.catch(next);
})

router.post('/', (req, res, next) => {
	lists.create(req.body)
		.then(list => {
			res.status(201).json(list);
		})
		.catch(next);
})

router.put('/:id', (req, res, next) => {
	lists.update(req.params.id, req.body)
		.then(list => {
			res.json(list);
		})
		.catch(next);
})

// Exports
module.exports = router;