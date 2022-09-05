var express = require('express');
var router = express.Router();
const authentication = require('../controllers/login/authentication');

// const validater = require("../middlewere/vailidation");

router.post('/login',authentication.loginUser);


module.exports = router;