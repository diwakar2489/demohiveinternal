var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
require('dotenv').config();
const db = require("./src/models");

console.log(process.env.DB_HOST); // 👉️ "james_doe"
console.log(process.env.DB_DATABASE); // 👉️ "dev"
console.log(process.env.PORT); // 👉️ "1234"

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
var authRouter = require('./src/routes/auth');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());  



app.use('/',authRouter);



module.exports = app;