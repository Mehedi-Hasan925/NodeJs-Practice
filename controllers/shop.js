// const products = [];


exports.getProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    Products.fetchAll((products)=>{
        res.render('shop/product-list', {prod:products, address:'/', title:"Classic Shop"})
    })
}

exports.cartProduct = (req,res,next)=>{
    res.render('shop/cart',{title:'Cart'})
}


exports.shopProducts = (req,res,next)=>{
    res.render('shop/cart',{title:'Cart'})
}

exports.checkoutProducts = (req,res,next)=>{
    res.render('shop/cart',{title:'Cart'})
}



