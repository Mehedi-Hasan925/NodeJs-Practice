const path = require('path')
const express = require('express')
const router = express.Router()

// app.set('view engine','pug');
// app.set('views',__dirname,'../views');

const shopController = require('../controllers/shop')

router.get("/",shopController.getIndex);
router.get("/cart",shopController.cartProduct);
router.get("/products",shopController.getProduct);
router.get("/checkout",shopController.checkoutProducts);

module.exports = router;