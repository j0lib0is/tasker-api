const db = require('../../data/db-config');

// Models
function get() {
	return db('lists');
};

function getById(list_id) {
	return db('lists').where({ list_id }).first();
};

function getWithFilter(filter) {
	return db('lists').where(filter);
};

async function create(list) {
	const sentList = await db('lists').insert(list);
	return getById(sentList.list_id);
};

// Exports
module.exports = {
	get,
	getById,
	getWithFilter,
	create
};