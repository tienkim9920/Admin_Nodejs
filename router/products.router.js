var express = require('express');

var router = express.Router();

var controller = require('../controller/products.controller');

router.get('/', controller.index);

//Create
router.get('/create', controller.viewCreateProduct);
router.post('/create', controller.addProduct);

//Delete
router.post('/', controller.deleteProduct);

module.exports = router;