const User = require("../models/user");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/products", {
        path: "/admin/products",
        products: products,
        pageTitle: "Admin Products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      res.render("admin/product", {
        path: `/admin/products/${prodId}`,
        product: product,
        pageTitle: product.name,
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product");
};

exports.postAddProduct = (req, res, next) => {
  const prodName = req.body.name;
  const prodPrice = req.body.price;
  const prodQuantity = req.body.quantity;
  req.user
    .createProduct({
      name: prodName,
      price: prodPrice,
      quantity: prodQuantity,
    })
    .then((product) => {
      res.redirect("/admin");
    })
    .catch((err) => console.log(err));
};
