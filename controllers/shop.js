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

exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{title:'Cart'})
}


exports.checkoutProducts = (req,res,next)=>{
    res.render('shop/checkout',{title:'Checkout'})
}

exports.getOrders = (req,res,next)=>{
    res.render('shop/orders',{title:'orders'})
}


exports.getProductDetails = (req,res,next)=>{
    const prodId = req.params.productId;
    Products.fetchById(prodId,(product)=>{
        console.log(product);
        res.render('shop/product-detail',{product:product,title:"Product Details"});
    })
}





