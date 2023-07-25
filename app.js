const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sequelizeDB = require("./util/database");
const User = require("./models/user");
const Product = require("./models/product");

const userRoutes = require("./routers/user");
const shopRoutes = require("./routers/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// for routes
app.use((req, res, next) => {
  User.findByPk(1).then((user) => {
    req.user = user;
    console.log(user);
    next();
  });
});

app.use("/admin", userRoutes);
app.use(shopRoutes);

User.hasMany(Product, { constraints: true, onDelete: "CASCADE" });
Product.belongsTo(User);

sequelizeDB
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "peth", mailId: "peth@test.com" });
    }
    return user;
  })
  .then((user) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
