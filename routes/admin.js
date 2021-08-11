const path = require('path')
const express = require('express')
const router = express.Router()

// const rootDir = require('../util/rootDir')
const products = [];

router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','add_product.html'));
});

router.post("/add-product",(req,res,next)=>{
//    console.log(req.body.ProductName);
    products.push({product : req.body.ProductName});
    res.redirect('/')
});

exports.routes = router;
exports.products = products;