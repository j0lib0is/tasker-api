const db = require('../../data/db-config');

// Models
function get() {
	return db('users');
};

function getById(user_id) {
	return db('users').where({ user_id }).first();
};

function getWithFilter(filter) {
	return db('users').where(filter);
};

async function create(user) {
	const sentUser = await db('users').insert(user);
	return getById(sentUser.user_id);
};

// Exports
module.exports = {
	get,
	getById,
	getWithFilter,
	create
};