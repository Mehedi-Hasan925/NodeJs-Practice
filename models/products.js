const fs = require('fs')
const path = require('path')

module.exports = class products{
    constructor(title){
        this.Name = title;
    }
    
    save(){
        const Path = path.join(__dirname,'../data','product.json');
        fs.readFile(Path,(err,fileContent)=>{
            let Products = [];
            if(!err){
                Products = JSON.parse(fileContent) //convert JSON dta into Javascript
            }
            Products.push(this);
            fs.writeFile(Path,JSON.stringify(Products),(err)=>{ // JSON.stringify() convert js array or object into JSON format
                console.log(err);
            })
        })
    }

    static fetchAll(renProduct){
        const Path = path.join(__dirname,'../data','product.json');
        fs.readFile(Path,(err,fileContent)=>{
            if(err){
                return renProduct([]);
            }
           return renProduct(JSON.parse(fileContent));
        });
    }
}