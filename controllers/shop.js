// const products = [];
const Products = require('../models/products')
const Cart = require('../models/cart')

exports.getProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products.findAll()
        .then((products)=>{
            res.render('shop/product-list',{prod:products, path:'/products', title:"Classic Shop"})
        })
        .catch()
}

exports.getIndex = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    console.log(req.user);
    Products.findAll()
        .then((products)=>{
            res.render('shop/index', {prod:products, path:'/products', title:"Classic Shop"})
        })
        .catch()
}

exports.getCart = (req,res,next)=>{
    Cart.fetchCart((cartProducts)=>{
        let productDetails = [];
        Products.fetchAll((products)=>{
            for(product of products){
                const cartData = cartProducts.products.find(prod=>prod.id===product.id);
                if(cartData){
                    productDetails.push({product:product,qty:cartData.qty});
                }
            }
            res.render('shop/cart',{title:'Your Cart',path:'/cart',products:productDetails,totalPrice:cartProducts.totalPrice})
        })
        
    })
}

exports.postCart = (req,res,next)=>{
    const prodId = req.body.productId;
    Products.fetchById(prodId,(product)=>{
        const prodPrice = product.price;
        Cart.addProduct(prodId,prodPrice);
    })
    res.render('shop/cart',{title:'Your Cart'});
}

exports.removeCartitem = (req,res,next)=>{
    const prodId = req.params.productId;
    Products.fetchById(prodId,(product)=>{
        Cart.removeProduct(prodId,product.price);
        res.redirect('/cart');
    })
}

exports.checkoutProducts = (req,res,next)=>{
    res.render('shop/checkout',{title:'Checkout'})
}

exports.getOrders = (req,res,next)=>{
    res.render('shop/orders',{title:'orders'})
}


exports.getProductDetails = (req,res,next)=>{
    const prodId = req.params.productId;
    Products.findByPk(prodId)
        .then(product=>{
            res.render('shop/product-detail',{product:product, path:'/product-details',title:"Product Details"});
        })
        .catch((err)=>{
            console.log(err);
        })
}





