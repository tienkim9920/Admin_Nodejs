const express = require('express')
var bodyParser = require('body-parser');
var upload = require('express-fileupload');

var products = require('./router/products.router');
var users = require('./router/users.router');
var orders = require('./router/orders.router');

const app = express()

const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Localhost', { useFindAndModify: true, useCreateIndex: true });

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(upload());

app.use('/admin/products', products);
app.use('/admin/users', users);
app.use('/admin/orders', orders);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));