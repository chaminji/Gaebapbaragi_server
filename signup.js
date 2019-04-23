const mysql = require('mysql');

let pool = mysql.createPool({
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
