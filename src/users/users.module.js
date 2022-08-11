const UsersRouter = require("./users.routes");
const UsersHandler = require("./users.controllers");

class UsersModule {
	constructor() {
		this._UsersRouter = UsersRouter;
		this._UsersHandler = UsersHandler;
	}

	get UsersRouter() {
		return this._UsersRouter;
	}

	get UsersHandler() {
		return this._UsersHandler;
	}
}

module.exports = new UsersModule();
