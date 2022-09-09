var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
require('dotenv').config();
const db = require("./src/models");

console.log(process.env.DB_HOST); 
console.log(process.env.DB_DATABASE); 
console.log(process.env.PORT); 

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

var authRouter = require('./src/routes/auth');
var projectRouter = require('./src/routes/project');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());  
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, './src/views'));   
app.set('view engine', 'ejs');



app.use('/login',authRouter);
app.use('/project',projectRouter);



module.exports = app;