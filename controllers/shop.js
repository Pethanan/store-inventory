const User = require("../models/user");
const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  console.log("here!1/");
  console.log(req.user);
  req.user
    .getProducts()
    .then((products) => {
      res.render("shop/shop", {
        path: "/index",
        products: products,
        pageTitle: "Shop",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  res.redirect("/index");
};

exports.postBuyFromStore = (req, res, next) => {
  const prodId = req.params.productId;
  const soldProdQty = +req.query.quantity;
  Product.findByPk(prodId)
    .then((product) => {
      const prodQuantity = product.quantity;
      product.quantity = prodQuantity - soldProdQty;
      return product.save();
    })
    .then((product) => {
      res.redirect("/index");
    })
    .catch((err) => console.log(err));
};
