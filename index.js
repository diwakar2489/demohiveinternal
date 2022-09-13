var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
require('dotenv').config();

console.log(process.env.DB_HOST); 
console.log(process.env.DB_DATABASE); 
console.log(process.env.PORT); 


//var authRouter = require('./src/routes/auth');
var projectRouter = require('./src/routes/project');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());  




//app.use('/login',authRouter);
app.use('/projectlist',projectRouter);



module.exports = app;