const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'bdz4rxonx3qtlhxsuifj-mysql.services.clever-cloud.com',
    user: 'u8y6mdskfirbsurn',
    password: '52qArNrtUq6h15AmPBI5',
    port: 3306,
    database: 'bdz4rxonx3qtlhxsuifj'
});

module.exports = dbConnection.promise();
