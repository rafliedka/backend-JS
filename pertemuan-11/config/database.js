//mysql
const mysql = require("mysql");

//import file env dan run method config
require("dotenv").  config();

//destructing object process.env
const {
    DB_HOST,
    DB_USERNAME,
    DB_PORT,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

//buat koneksi
const db = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

//koneksikan database dengan method conect
db.connect((err) => {
    if (err) {
        console.log("Error Connecting" + err.stack);
        return;
    } else {
        console.log("connected to database");
        return;
    }
});

//export db
module.exports = db;