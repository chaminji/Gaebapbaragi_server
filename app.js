const http = require('http');
const app = require('express')();
const bodyParser = require('body-parser');

const mysql = require('mysql');
const loginModule = require("./login");
const signupModule = require("./signup");

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'sks9331509',
    port: '3306',
    database: 'gaebap',
    debug: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.post('/login', (req, res) => {
    let id = req.body.id;
    let password = req.body.password;
    if(pool) {
        loginModule.SignIn(id, password, (err, rows) => {
            if (err) {
                res.sendStatus(503);
            } else if (rows) {
                res.sendStatus(200);
            }
        });
    }
});

app.post('/signup', (req, res) => {
    let id = req.body.id;
    let password = req.body.password;
    if(pool) {
        signupModule.SignUp(id, password, (err) => {
            if (err) {
                res.sendStatus(503);
            } else {
                res.sendStatus(200);
            }
        });
    }
});

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => {
    console.log('http://localhost:' + port);
});