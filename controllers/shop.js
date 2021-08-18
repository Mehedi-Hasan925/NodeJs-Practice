// const products = [];
const Products = require('../models/products')

exports.getProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products.fetchAll((products)=>{
        res.render('shop/product-list', {prod:products, address:'/products', title:"Classic Shop"})
    })
}

exports.getIndex = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products.fetchAll((products)=>{
        res.render('shop/index', {prod:products, address:'/', title:"Classic Shop"})
    })
}

exports.cartProduct = (req,res,next)=>{
    res.render('shop/cart',{title:'Cart'})
}


exports.checkoutProducts = (req,res,next)=>{
    res.render('shop/checkout',{title:'Checkout'})
}



