const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3307,
    database: 'rems'
});

module.exports = dbConnection.promise();