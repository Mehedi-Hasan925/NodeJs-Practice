const path = require('path')
const express = require('express')
const router = express.Router()

// app.set('view engine','pug');
// app.set('views',__dirname,'../views');

const adminData = require('./admin')

router.get("/",(req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products = adminData.products
    res.render('shop', {prod:Products, cls_home:'active',title:"Classic Shop", hasProduct:Products.length>0})
});

module.exports = router;