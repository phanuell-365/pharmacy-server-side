require("dotenv").config();
const Sequelize = require("sequelize");
// const User = require("../users/users.models");
const sequelize = new Sequelize(
	// eslint-disable-next-line no-undef
	process.env.DB_NAME,
	// eslint-disable-next-line no-undef
	process.env.DB_USER,
	// eslint-disable-next-line no-undef
	process.env.DB_PASS,
	{
		// eslint-disable-next-line no-undef
		host: process.env.DB_HOST,
		// eslint-disable-next-line no-undef
		dialect: process.env.DB_DIALECT,
	}
);
// sequelize.addModel(User);
// await sequelize.sync();
// await sequelize.sync({force: true});
// await sequelize.sync({alter: true});
// return sequelize;

module.exports = sequelize;
