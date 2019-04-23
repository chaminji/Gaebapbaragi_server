const mysql = require('mysql');

let pool = mysql.createPool({
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

