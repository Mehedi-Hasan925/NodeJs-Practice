const path = require('path')
const express = require('express')
const router = express.Router()

const addProductController = require('../controllers/products')

// const rootDir = require('../util/rootDir')


router.get("/add-product",addProductController.getAddProduct);

router.post("/add-product",addProductController.postAddProduct);


module.exports = router;
// exports.routes = router;
// exports.products = products;