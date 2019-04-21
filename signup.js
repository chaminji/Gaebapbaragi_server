const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 0,
    host: 'localhost',
    user: 'root',
    password: 'sks9331509',
    port: '3306',
    database: 'gaebap',
    debug: false
});

exports.SignUp = (id, password, callback) => {
    console.log('Login');
    pool.getConnection((err, conn) => {
        if (err)
            console.log(err);
        conn.query('INSERT INTO users(id, password) VALUES(?, ?)', [id, password], (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        })
    })
};