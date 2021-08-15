const Product = [];
module.exports = class products{
    constructor(title){
        this.title = title;
    }
    
    save(){
        Product.push(this)
    }

    static fetchAll(){
        return this.Product;
    }
}