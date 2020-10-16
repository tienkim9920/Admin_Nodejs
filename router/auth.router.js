var express = require('express');

var router = express.Router();

var controller = require('../controller/auth.controller');

//Login
router.get('/login', controller.index);
router.post('/login', controller.login);

module.exports = router;