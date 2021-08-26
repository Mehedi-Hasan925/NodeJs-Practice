

const Cart = require('./cart')
const db = require('../util/database')


module.exports = class products {
    constructor(id,productName,imageUrl,price,description) {
        this.id = id;
        this.Name = productName;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        return db.execute('INSERT INTO products(title,price,description,imageUrl) VALUES (?,?,?,?)'),[this.Name, this.price,this.description,this.imageUrl] 
    }

    static fetchAll(renProduct) {
        return db.execute('SELECT * FROM products')
    }

    static fetchById(id,cb){
       
    }

    static deleteByid(id){
        
    }
}