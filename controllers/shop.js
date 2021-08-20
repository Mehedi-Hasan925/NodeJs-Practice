// const products = [];
const Products = require('../models/products')
const Cart = require('../models/cart')

exports.getProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products.fetchAll((products)=>{
        res.render('shop/product-list', {prod:products, path:'/products', title:"Classic Shop"})
    })
}

exports.getIndex = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products.fetchAll((products)=>{
        res.render('shop/index', {prod:products, path:'/', title:"Classic Shop"})
    })
}

exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{title:'Your Cart'})
}

exports.postCart = (req,res,next)=>{
    const prodId = req.body.productId;
    Products.fetchById(prodId,(product)=>{
        const prodPrice = product.price;
        Cart.addProduct(prodId,prodPrice);
    })
    res.render('shop/cart',{title:'Your Cart'});
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
        res.render('shop/product-detail',{product:product,title:"Product Details"});
    })
}





