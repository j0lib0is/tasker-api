const db = require('../../data/db-config');

// Models
function get() {
	return db('tasks');
};

function getById(task_id) {
	return db('tasks').where({ task_id }).first();
};

function getWithFilter(filter) {
	return db('tasks').where(filter);
};

async function create(task) {
	const sentTask = await db('tasks').insert(task);
	return getById(sentTask.task_id);
};

async function remove(task_id) {
	const task = await getById(task_id);
	await db('tasks').where({ task_id }).del();
	return task;
};

// Exports
module.exports = {
	get,
	getById,
	getWithFilter,
	create,
	remove
};