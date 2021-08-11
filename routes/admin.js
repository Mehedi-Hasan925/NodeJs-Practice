const path = require('path')
const express = require('express')
const router = express.Router()

const rootDir = require('../util/rootDir')

router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','add_product.html'));
});

router.post("/add-product",(req,res,next)=>{
   console.log(req.body);
    res.redirect('/')
});

module.exports = router;