var express = require('express');
var router = express.Router();
const ProjectCtrl = require('../controllers/project/project_api');

// const validater = require("../middlewere/vailidation");

router.post('/project',ProjectCtrl.List);
router.post('/addproject',ProjectCtrl.add);
router.post('/edit',ProjectCtrl.edit);
router.post('/update',ProjectCtrl.update);
router.post('/delete',ProjectCtrl.delete);



module.exports = router;