/* ---------- modules ---------- */
//express
var express = require('express');
var app = express();

//path
var path = require("path");

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

//Angular
app.use(express.static( __dirname + '/WeatherAPIAngular/dist' ));

/* ---------- routes ---------- */
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./dist/index.html"))
});

/* ---------- port ---------- */
app.listen(4200, function(){
    console.log('WeatherAPI2 Project listening on port 4200');
})