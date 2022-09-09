var express = require('express');
var router = express.Router();
const ProjectCtrl = require('../controllers/project/project_api');

// const validater = require("../middlewere/vailidation");

router.post('/list',ProjectCtrl.ProjectList);


module.exports = router;