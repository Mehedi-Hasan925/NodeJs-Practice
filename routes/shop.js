const path = require('path')
const express = require('express')
const router = express.Router()

// app.set('view engine','pug');
// app.set('views',__dirname,'../views');

const shopController = require('../controllers/shop')

router.get("/",shopController.getProduct);
router.get("/cart",shopController.cartProduct);
router.get("/products",shopController.shopProducts);
router.get("/checkput",shopController.shopProducts);

module.exports = router;