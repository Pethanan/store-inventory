const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sequelizeDB = require("./util/database");
const app = express();

const AdminUser = require("./models/user");
const InventoryProduct = require("./models/product");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// for routes

AdminUser.hasMany(InventoryProduct, { constraints: true, onDelete: "CASCADE" });
InventoryProduct.belongsTo(AdminUser);

sequelizeDB
  .sync()
  .then((result) => {
    return AdminUser.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return AdminUser.create({ name: "peth", mailId: "peth@test.com" });
    }
    return user;
  })
  .then((user) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
