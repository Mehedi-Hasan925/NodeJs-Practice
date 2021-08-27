const Products = require('../models/products');


exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'));
    res.render('admin/edit-product',{path:'admin/add-product',title:"Add Product",editing:false})
}

exports.postAddProduct = (req,res,next)=>{
    const tittle = req.body.ProductName
    const price = req.body.price
    const description = req.body.description
    const imageUrl = req.body.imageUrl
    const Product =new Products(null,tittle,imageUrl,price,description)
    Product.save()
        .then(()=>{

        })
        .catch((err)=>{
            console.log(err);
        });
    res.redirect('/')
}

exports.adminProduct = (req,res,next)=>{
    Products.fetchAll()
        .then(([rows,fieldData])=>{
            res.render('admin/products-admin', {prod:rows, path:'admin/products-admin', title:"Classic Shop"})
        })
        .catch((err)=>{
            console.log(err);
        })
}

exports.getEditProduct = (req,res,next)=>{
    // const editMode = req.query.edit;
    const editMode = true;
    const prodId = req.params.productId;
    Products.fetchById(prodId)
        .then(([product])=>{
            res.render('admin/edit-product',{address:'admin/add-product',path:'admin/edit-product',title:"Edit Product",product:product[0],editing:editMode})
        })
        .catch((err)=>{
            console.log(err);
        })
}

exports.postEditProduct = (req,res,next)=>{
    const prodId = req.body.productId;
    const prodName = req.body.ProductName;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
   
    const updatedProduct = new Products(prodId,prodName,imageUrl,price,description)
    updatedProduct.save();
    res.redirect('/admin/products');
}


exports.deleteProduct = (req,res,next)=>{
    const prodId = req.body.productId;

    Products.deleteByid(prodId)
        .then(()=>{
            res.redirect('/admin/products');
        })
        .catch((err)=>{
            console.log(err);
        })
}