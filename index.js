const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({type:'*/*'}))

var con = mysql.createConnection({
    host:'us-cdbr-iron-east-02.cleardb.net',
    user:'bd89c04157b71b',
    password:'ec903f18',
    database:'heroku_feb8a5e884bb6f2'
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
})

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});