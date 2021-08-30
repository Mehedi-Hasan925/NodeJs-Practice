// ----------------------------------------------------------------------------------
// ---------------------- Mongodb ---------------------------------------------------
const mongodb = require('mongodb')
const getDB = require('../util/database').getDB
class Products{
    constructor(title,price,description,imageUrl,id){
        this.title = title,
        this.price = price,
        this.description = description,
        this.imageUrl = imageUrl
        this._id = id
    }

    save(){
        const db = getDB();
        if(this._id){
            return db.collection('products').updateOne({_id: new mongodb.ObjectId(this._id)},{$set:this})
            .then((result)=>{
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            return db.collection('products').insertOne(this)
            .then(()=>{
            })
            .catch(err=>{
                console.log(err);
            })
        }
        
    }

    static fetchAll(){
        const db = getDB();
        return db.collection('products').find().toArray()
        .then((products)=>{
            console.log(products);
            return products;
        })
        .catch(err=>{
            console.log(err);
        })
    }

    static fetchById(prodId){
        const db = getDB();
        return db.collection('products').find({_id: new mongodb.ObjectId(prodId)}).toArray()
        .then((product)=>{
            console.log(product);
            return product;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

module.exports = Products;




// ----------------------------------------------------------------------------------
// ---------------------- Mysql sequelizer -------------------------------------------

// const { Sequelize } = require('sequelize');
// const sequalizeConnection = require('../util/database')

// const Products = sequalizeConnection.define('product',{
//     id:{
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     title:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     price:{
//         type:Sequelize.DOUBLE,
//         allowNull: false
//     },
//     imageUrl:{
//         type:Sequelize.TEXT,
//         allowNull:true
//     },
//     description:{
//         type: Sequelize.TEXT,
//         allowNull:false
//     }
// });

// module.exports = Products;