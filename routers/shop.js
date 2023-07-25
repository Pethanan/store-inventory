const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/", shopController.getProducts);
router.get("/index", shopController.getIndex);
router.post("/buy-from-store/:productId", shopController.postBuyFromStore);

module.exports = router;
