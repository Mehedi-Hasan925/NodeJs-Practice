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
    // const Path = path.join(__dirname, '../data', 'product.json');
    // res.redirect('/admin/products');
    // Products.fetchAll((products)=>{
    //     const productIndex = products.findIndex(prod=>prod.id===prodId);
    //     products.splice(productIndex,1)
        
    //     fs.writeFile(Path,JSON.stringify(products),(err)=>{
    //         console.log(err);
    //         res.redirect('/admin/products');
    //     });

    // });

    Products.deleteByid(prodId);
    res.redirect('/admin/products');
}