const path = require('path')
const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shop')
const adminController = require('../controllers/admin')

// const rootDir = require('../util/rootDir')


router.get("/add-product",adminController.getAddProduct);
router.post("/add-product",adminController.postAddProduct);

router.get("/products",adminController.adminProduct);


module.exports = router;
// exports.routes = router;
// exports.products = products;