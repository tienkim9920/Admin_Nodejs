var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        MSHD: String,
        idUser: String,
        idProduct: String,
        count: Number,
        price: Number,
        size: String,
        color: String,
        nameProduct: String 
    }
);

var Orders = mongoose.model('Orders', schema, 'orders');

module.exports = Orders;