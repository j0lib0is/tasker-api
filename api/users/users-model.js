const db = require('../../data/db-config');

// Models
function get() {
	return db('users');
}

function getById(user_id) {
	return db('users').where({ user_id }).first();
}

function getWithFilter(filter) {
	return db('users').where(filter);
}

function update(user_id, payload) {
	const user = db('users').where({ user_id }).first();

	return {
		email: payload.email ? payload.email : user.email,
		password: payload.password ? payload.password : user.password
	}
}

// Exports
module.exports = {
	get,
	getById,
	getWithFilter,
	update
};