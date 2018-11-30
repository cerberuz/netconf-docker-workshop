var express = require('express');
var app = express();
var mysql = require("mysql");
var con = mysql.createConnection({ host: process.env.MYSQL_HOST, user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, database: process.env.MYSQL_DATABASE});

// mysql code

con.connect(function(err){
  if(err){
    console.log('Error conectando a al Base de datos: ', err);
    return;
  }
  console.log('Conexion a la base de datos establecida');
  con.query('CREATE TABLE IF NOT EXISTS visits (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, ts BIGINT)',function(err) {
    if(err) throw err;
  });
});

// Request handling
app.get('/', function (req, res) {
  // create table if not exist
  con.query('INSERT INTO visits (ts) values (?)', Date.now(),function(err, dbRes) {
    if(err) throw err;
    res.send('Hey! eres el visitante numero '+dbRes.insertId);
  });
});


// server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
