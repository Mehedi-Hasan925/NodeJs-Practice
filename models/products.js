const Product = [];
module.exports = class products{
    constructor(title){
        this.Name = title;
    }
    
    save(){
        Product.push(this)
    }

    static fetchAll(){
        return Product;
    }
}