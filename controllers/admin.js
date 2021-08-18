const Products = require('../models/products')

exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'));
    res.render('admin/add_product',{address:'admin/add-product',title:"Add Product"})
}

exports.postAddProduct = (req,res,next)=>{
//    console.log(req.body.ProductName);
    // products.push({Name : req.body.ProductName});
    const Product =new Products(req.body.ProductName)
    Product.save();
    res.redirect('/')
}

exports.adminProduct = (req,res,next)=>{
    res.render('admin/products-admin',{title:'admin products'})
}
