let mysql = require('mysql');

let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1130',
    database : 'pharmacy'
});

db.connect(err=>{
    if(err) 
        console.log("Error Occured")
    else
        console.log("Connected to database")
});

module.exports = db;