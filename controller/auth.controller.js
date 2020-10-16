
const { render } = require('ejs');
const md5 = require('md5');
var Users = require('../models/users.model');

module.exports.index = (req, res) => {

    res.render('auth/index', {
        errorEmail: false,
        errorPassword: false,
        email: ""
    })

}

module.exports.login = async (req, res) => {

    var email = req.body.email
    var password = req.body.password

    var user = await Users.findOne({email: email});

    if (!user){
        res.render('auth/index', {
            errorEmail: true,
            errorPassword: false,
        })
    }else{
        if (user.password !== md5(password)){
            res.render('auth/index', {
                errorEmail: false,
                errorPassword: true,
                email: email
            })
        }
    }

    res.cookie('userID', user._id, {
        signed: true
    });

    res.redirect('/admin/users');

}