const Products = require('../models/products')

exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'));
    res.render('admin/edit-product',{address:'admin/add-product',title:"Add Product",editing:false})
}

exports.postAddProduct = (req,res,next)=>{
//    console.log(req.body.ProductName);
    // products.push({Name : req.body.ProductName});
    const Product =new Products(req.body.ProductName,req.body.imageUrl,req.body.price,req.body.description)
    Product.save();
    res.redirect('/')
}

exports.adminProduct = (req,res,next)=>{
    Products.fetchAll((products)=>{
        res.render('admin/products-admin', {prod:products, path:'admin/products-admin', title:"Classic Shop"})
    })
    
}

exports.getEditProduct = (req,res,next)=>{
    // const editMode = req.query.edit;
    const editMode = true;
    // if(!editMode){
    //     res.redirect('/')
    // }
    const prodId = req.params.productId;
    Products.fetchById(prodId,(product)=>{
        res.render('admin/edit-product',{address:'admin/add-product',path:'admin/edit-product',title:"Edit Product",product:product,editing:editMode})
    })
}

exports.postEditProduct = (req,res,next)=>{
    // const editMode = req.query.edit;
    const editMode = true;
    // if(!editMode){
    //     res.redirect('/')
    // }
    const prodId = req.params.productId;
    Products.fetchById(prodId,(product)=>{
        res.render('admin/edit-product',{address:'admin/add-product',title:"Edit Product",product:product,editing:editMode})
    })
}
