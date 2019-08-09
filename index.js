const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({type:'*/*'}))

var con = mysql.createConnection({
    host:'localhost',
    user:'hellosay_no01',
    password:'2RdymJS1a8',
    database:'hellosay_no01'
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
})

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});