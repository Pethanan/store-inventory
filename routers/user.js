const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getProducts);
router.get("/add-product", userController.getAddProduct);
router.post("/add-product", userController.postAddProduct);
router.get("/products/:productId", userController.getProduct);

module.exports = router;
