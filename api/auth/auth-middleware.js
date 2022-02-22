const users = require('../users/users-model');

async function checkUserExists(req, res, next) {
	const result = await users.findBy({ email: req.body.email }).first();

	if (result) {
		req.user = result;
		next();
	} else {
		next({ status: 401, message: 'Invalid credentials.' });
	}
}

async function validateEmail(req, res, next) {
	const result = await users.findBy({ email: req.body.email }).first();

	if (result) {
		next({ status: 422, message: `${req.body.email} is already used by another account.` });
	} else {
		next();
	}
}

function restricted(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		next({ status: 401, message: 'You do not have access.' });
	}
}

module.exports = {
	checkUserExists,
	validateEmail,
	restricted
}
