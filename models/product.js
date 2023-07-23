const { Sequelize } = require("sequelize");
const sequelizeDB = require("../util/database");

const InventoryProduct = sequelizeDB.define("inventory-product", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  quantity: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  price: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
});

module.exports = InventoryProduct;
