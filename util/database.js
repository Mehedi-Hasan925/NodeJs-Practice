// const mysql = require('mysql2')

const Sequelize = require('sequelize').Sequelize;

const sequalize = new Sequelize('node-practice','root','',{dialect:'mysql',host:'localhost'});

module.exports = sequalize;

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-practice',
//     password: ''
// });

// module.exports = pool.promise();