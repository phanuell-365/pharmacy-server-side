const sequelize = require("../database/database.providers");

class DatabaseModule {
	constructor() {
		this._pharmacy = sequelize;
	}

	get pharmacy() {
		return this._pharmacy.sync();
	}
}

module.exports = new DatabaseModule();
