const { Sequelize } = require('sequelize');
const sequalizeConnection = require('../util/database')

const Products = sequalizeConnection.define('product',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull:false
    }
});

module.exports = Products;