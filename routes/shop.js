const path = require('path')
const express = require('express')
const router = express.Router()

// app.set('view engine','pug');
// app.set('views',__dirname,'../views');

const shopController = require('../controllers/shop')

router.get("/",shopController.getIndex);
router.get("/cart",shopController.getCart);
router.post("/cart",shopController.postCart);
router.get("/products",shopController.getProduct);
router.get("/product-details/:productId",shopController.getProductDetails);
router.get("/checkout",shopController.checkoutProducts);
router.get("/orders",shopController.getOrders);
router.get("/remove-cart-item/:productId",shopController.removeCartitem);

module.exports = router;