const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-app',
    password: 'mysql1234'
});

module.exports = connection.promise();
