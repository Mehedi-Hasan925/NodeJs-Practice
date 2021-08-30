// ----------------------------------------------------------------------------------
// ---------------------- Mongodb --------------------------------------------------

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect =((callback)=>{
    MongoClient.connect('mongodb+srv://Mehedi_Hasan:1727422355@cluster0.mlddo.mongodb.net/shop?retryWrites=true&w=majority')
    .then((client)=>{
        console.log('Connected!!!');
        _db = client.db()
        callback();
    })
    .catch(err=>{
        console.log(err);
    })

});

const getDB = ()=>{
    if(_db){
        return _db;
    }
    else{
        throw 'no database found!'
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;




// ----------------------------------------------------------------------------------
// ---------------------- Mysql sequelizer -------------------------------------------
// const mysql = require('mysql2')

// const Sequelize = require('sequelize').Sequelize;

// const sequalize = new Sequelize('node-practice','root','',{dialect:'mysql',host:'localhost'});

// module.exports = sequalize;
