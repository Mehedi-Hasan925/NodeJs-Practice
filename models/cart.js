const fs = require('fs')
const path = require('path')

const Path = path.join(__dirname, '../data', 'cart.json');



module.exports = class Cart {
    static addProduct(id, prodPrice) {
        // fetch the product
        fs.readFile(Path, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent)
            }
            // analyze product that it exist or not
            const existProductIndex = cart.products.findIndex((prod) => prod.id === id)
            const existProduct = cart.products[existProductIndex]
            let updatedProduct;
            if (existProduct) {
                updatedProduct = { ...existProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products]
                cart.products[existProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }

            cart.totalPrice = cart.totalPrice + +prodPrice

            fs.writeFile(Path, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })

        // add product / increase quantity 
    }

    static fetchCart(fetchProduct) {
        fs.readFile(Path, (err, fileContent) => {
            const cartProducts = JSON.parse(fileContent);
            fetchProduct(cartProducts);
        })
    }

    static removeProduct(id, productPrice) {
        //fetch product
        fs.readFile(Path, (err, fileContent) => {
            const Cart = JSON.parse(fileContent);
            const cartProducts = { ...Cart };
            const updatedProducts = cartProducts.products.filter(prod => prod.id != id);
            const product = cartProducts.products.find(prod => prod.id === id);
            if (!product) {
                return;
            } else {
                const productQty = product.qty;
                cartProducts.products = updatedProducts
                cartProducts.totalPrice = (cartProducts.totalPrice - (productPrice * productQty));

                fs.writeFile(Path, JSON.stringify(cartProducts), (err) => {
                    console.log(err);
                })
            }

        })

        // get quantity
        // re
    }
}