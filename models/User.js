const { Sequelize } = require('sequelize');
const sequalizeConnection = require('../util/database')


const User = sequalizeConnection.define('User',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name:Sequelize.STRING,
    email:Sequelize.STRING
});

module.exports = User