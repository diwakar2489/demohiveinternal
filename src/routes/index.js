var express = require('express');
var router = express.Router();
const home = require('../controllers/home/home');

// const validater = require("../middlewere/vailidation");

router.get('/',home.homePage);


module.exports = router;