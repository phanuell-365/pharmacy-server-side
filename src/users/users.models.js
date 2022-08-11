const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database.providers");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			unique: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Name is required",
				},
			},
			comment: "The name of the user",
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Email is required",
				},
				isEmail: {
					msg: "Email is invalid",
				},
			},
			comment: "The email of the user",
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "Password is required",
				},
				len: [8, 255],
				// is: {
				// 	args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
				// },
			},
		},
		role: {
			type: DataTypes.ENUM,
			values: ["admin", "user"],
			defaultValue: "user",
			allowNull: false,
			comment: "The role of the user",
		},
	},
	{
		paranoid: true,
		sequelize,
		modelName: "User",
	}
);

module.exports = User;
