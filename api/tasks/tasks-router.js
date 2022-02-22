// Imports
const router = require('express').Router();
const tasks = require('./tasks-model');

// Endpoints
router.get('/', (req, res, next) => {
	tasks.get()
		.then(tasks => {
			res.json(tasks);
		})
		.catch(next);
})

router.get('/:id', (req, res, next) => {
	tasks.getById(req.params.id)
		.then(task => {
			res.json(task);
		})
		.catch(next);
})

router.post('/', (req, res, next) => {
	tasks.create(req.body)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(next);
})

router.put('/:id', (req, res, next) => {
	tasks.update(req.params.id, req.body)
		.then(task => {
			res.json(task);
		})
		.catch(next);
})

// Exports
module.exports = router;