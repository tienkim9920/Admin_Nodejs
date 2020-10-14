var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        fullname: String,
        phone: String,
        email: String,
        password: String,
        status: Boolean,
    }
);

var Users = mongoose.model('Users', schema, 'users');

module.exports = Users;