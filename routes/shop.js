const path = require('path')
const express = require('express')
const router = express.Router()

// app.set('view engine','pug');
// app.set('views',__dirname,'../views');

const getProductController = require('../controllers/products')

router.get("/",getProductController.getProduct);

module.exports = router;