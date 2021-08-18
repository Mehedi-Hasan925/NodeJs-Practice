const fs = require('fs')
const path = require('path')

const Path = path.join(__dirname, '../data', 'product.json');

const getProductsFromFile = (renProduct) => {
    fs.readFile(Path, (err, fileContent) => {
        if (err) {
            return renProduct([]);
        }
        return renProduct(JSON.parse(fileContent));
    });
}

module.exports = class products {
    constructor(title) {
        this.Name = title;
    }

    save() {
            // let Products = [];
            getProductsFromFile((Products) => {
                Products.push(this);
                fs.writeFile(Path, JSON.stringify(Products), (err) => { // JSON.stringify() convert js array or object into JSON format
                    console.log(err);
                })
            })
    }

    static fetchAll(renProduct) {
        getProductsFromFile(renProduct)
    }
}