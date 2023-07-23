const { Sequelize, DataTypes } = require("sequelize");
const sequelizeDB = require("../util/database");

const AdminUser = sequelizeDB.define("admin-user", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  mailId: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

module.exports = AdminUser;
