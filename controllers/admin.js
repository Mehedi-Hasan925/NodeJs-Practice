const Products = require('../models/products');
const express = require('express');


exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'));
    res.render('admin/edit-product',{path:'admin/add-product',title:"Add Product",editing:false})
}

exports.postAddProduct = (req,res,next)=>{
    const title = req.body.ProductName
    const price = req.body.price
    const description = req.body.description
    const imageUrl = req.body.imageUrl
    console.log(req.user);
    Products.create({
        title:title,
        price:price,
        description:description,
        imageUrl:imageUrl,
        // UserId:req.user.id
    })
    .then(()=>{
        res.redirect('/admin/products')
    })
    .catch((err)=>{
        console.log(err);
    })
    // const Product =new Products(null,tittle,imageUrl,price,description)

    // Product.save()
    //     .then(()=>{

    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // res.redirect('/')
}

exports.adminProduct = (req,res,next)=>{
    Products.findAll()
        .then((products)=>{
            res.render('admin/products-admin', {prod:products, path:'admin/products-admin', title:"Classic Shop"})
        })
        .catch()
    // Products.fetchAll()
    //     .then(([rows,fieldData])=>{
    //         res.render('admin/products-admin', {prod:rows, path:'admin/products-admin', title:"Classic Shop"})
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
}

exports.getEditProduct = (req,res,next)=>{
    // const editMode = req.query.edit;
    const editMode = true;
    const prodId = req.params.productId;
    Products.findByPk(prodId)
        .then((product)=>{
            res.render('admin/edit-product',{address:'admin/add-product',path:'admin/edit-product',title:"Edit Product",product:product,editing:editMode})
        })
        .catch((err)=>{
            console.log(err);
        })
}

exports.postEditProduct = (req,res,next)=>{
    const prodId = req.body.productId;
    const title = req.body.ProductName;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    Products.findByPk(prodId)
        .then((product)=>{
            product.title = title;
            product.price = price;
            product.description = description;
            product.imageUrl = imageUrl;
            
            return product.save()
        })
            .then(result=>{
                res.redirect('/admin/products')
            })
            .catch(err=>{
                console.log(err);
            })
        .catch((err)=>{
            console.log(err);
        })
}


exports.deleteProduct = (req,res,next)=>{
    const prodId = req.body.productId;

    Products.findByPk(prodId)
        .then((product)=>{
            return product.destroy()
        })
            .then(()=>{
                res.redirect('/admin/products');
            })
            .catch(err=>{
                console.log(err);
            })
        .catch((err)=>{
            console.log(err);
        })
}