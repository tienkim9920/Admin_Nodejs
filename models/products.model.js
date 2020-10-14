var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        name: String,
        price: Number,
        status: Boolean,
        img: String,
        count: Number
    }
);

var Products = mongoose.model('Products', schema, 'products');

module.exports = Products;