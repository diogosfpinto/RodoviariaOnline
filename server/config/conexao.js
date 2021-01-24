const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'operator',
    password: 'admin',
    database: 'rodoviaria-online'
})

module.exports = conexao;