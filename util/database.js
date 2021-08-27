// const mysql = require('mysql2')

const Sequalize = require('sequelize')

const sequalize = new Sequalize('node-practice','root','',{dialect:'mysql',host:'localhost'});

module.exports = sequalize;

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-practice',
//     password: ''
// });

// module.exports = pool.promise();