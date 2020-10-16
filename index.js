const express = require('express')
var bodyParser = require('body-parser');
var upload = require('express-fileupload');
var cookieParser = require('cookie-parser')

var products = require('./router/products.router');
var users = require('./router/users.router');
var orders = require('./router/orders.router');
var auth = require('./router/auth.router');

var middleware = require('./middleware/auth.middleware');

const app = express()

const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Localhost', { useFindAndModify: true, useCreateIndex: true });

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(cookieParser('ahdsjasdhjkashdsdf099'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(upload());

app.use('/admin/products', middleware.CheckMiddle, products);
app.use('/admin/users', middleware.CheckMiddle, users);
app.use('/admin/orders', middleware.CheckMiddle, orders);
app.use('/admin/', auth);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));