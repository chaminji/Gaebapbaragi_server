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

exports.SignIn = (id, password, callback) => {
    console.log('Login');
    pool.getConnection((err, conn) => {
        if (err)
            console.log(err);
        conn.query('SELECT * FROM users WHERE id=? and password=?', [id, password], (err, rows) => {
            if (err) {
                callback(err, null);
            } else if (rows.length > 0) {
                callback(null, rows);
            }else{
                callback(null, null);
            }
        })
    })
};

