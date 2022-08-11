const User = require("../users/users.models");

class UsersService {
	sayHello() {
		return "Hello World!";
	}

	/**
   * @description Get all users from the database
   * @returns {Promise<User[]>}
   */
	async getUsers() {
		return await User.findAll();
	}

	/**
   * @description Create a new user in the database
   * @returns {Promise<User>}
   */
	async createUser() {
		return await User.create({
			name: "John Doe",
			email: "johndoe@localhost.com",
			password: "12345678ABfd?/",
			role: "admin",
		});
	}

	/**
   * @description Get a user from the database
   * @param {string} id
   * @returns {Promise<User>}
   */
	async getUser(id) {
		return await User.findByPk(id);
	}

	/**
   * @description Update a user in the database
   * @param {string} id
   * @param {object} data
   * @returns {Promise<[affectedCount: number, affectedRows: User[]]>}
   */
	async updateUser(id, data) {
		return await User.update(data, {
			where: {
				id,
			},
		});
	}

	/**
   * @description Delete a user from the database
   * @param {string} id
   * @returns {Promise<number>}
   */
	async deleteUser(id) {
		return await User.destroy({
			where: {
				id,
			},
		});
	}
}

module.exports = new UsersService();
