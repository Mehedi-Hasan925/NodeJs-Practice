const products = [];

exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'));
    res.render('add_product',{cls:'active',title:"Add Product"})
}

exports.postAddProduct = (req,res,next)=>{
//    console.log(req.body.ProductName);
    products.push({Name : req.body.ProductName});
    res.redirect('/')
}


exports.getProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    res.render('shop', {prod:products, cls_home:'active',title:"Classic Shop"})
}

