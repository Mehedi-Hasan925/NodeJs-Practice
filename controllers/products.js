// const products = [];
const Products = require('../models/products')

exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'));
    res.render('add_product',{cls:'active',title:"Add Product"})
}

exports.postAddProduct = (req,res,next)=>{
//    console.log(req.body.ProductName);
    // products.push({Name : req.body.ProductName});
    const Product =new Products(req.body.ProductName)
    Product.save();
    res.redirect('/')
}


exports.getProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    const products = Products.fetchAll()
    res.render('shop', {prod:products, cls_home:'active',title:"Classic Shop"})
}

