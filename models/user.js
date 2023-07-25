const { Sequelize, DataTypes } = require("sequelize");
const sequelizeDB = require("../util/database");

const User = sequelizeDB.define("user", {
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

module.exports = User;
