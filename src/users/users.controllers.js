const { sayHello, getUsers, createUser } = require("./users.services");

class UsersControllers {
	// eslint-disable-next-line no-unused-vars
	getHello(req, res, _next) {
		res.status(200).json({
			message: sayHello(),
		});
	}

	// eslint-disable-next-line no-unused-vars
	async getUsers(req, res, _next) {
		res.status(200).json({
			users: await getUsers(),
		});
	}

	// eslint-disable-next-line no-unused-vars
	createUser(req, res, _next) {
		res.status(200).json({
			users: createUser(),
		});
	}
}

module.exports = new UsersControllers();
