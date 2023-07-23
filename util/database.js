const { Sequelize } = require("sequelize");

const sequelizeDB = new Sequelize("peth_node", "root", "PETHmysql1@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelizeDB;
