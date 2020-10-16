
var Users = require('../models/users.model')
var md5 = require('md5');

module.exports.index = async (req, res) => {

    var users = await Users.find()

    res.render('users/index', {
        users: users
    })

}

// View Index Create
module.exports.viewCreateProduct = (req, res) => {
    
    res.render('users/create', {
        success: false
    })

}

//Create Product
module.exports.addProduct = async (req, res) => {

    var user = new Users()

    user.fullname = req.body.fullname
    user.email = req.body.email
    user.password = md5(req.body.password);
    user.phone = req.body.phone
    user.status = req.body.status

    user.save();

    res.render('users/create', {
        success: true
    })

}

//Delete User
module.exports.deleteProduct = async (req, res) => {

    var idDelete = req.body.userID

    console.log(idDelete)

    Users.findOneAndRemove({_id: idDelete}, (err) => {
        if (err){
            console.log(err);
            return
        }
        return res.status(200).send()
    });

    res.redirect('/admin/users');

}


//Update User
module.exports.viewUpdate = async (req, res) => {
    
    var idUser = req.params.id

    var user = await Users.findOne({_id: idUser})

    res.render('users/update', {
        user: user,
        success: false
    })

}

module.exports.updateUser = async (req, res) => {

    var idUser = req.params.id

    var user = await Users.findOne({_id: idUser})

    user.fullname = req.body.fullname
    user.email = req.body.email
    user.password = md5(req.body.password)
    user.status = req.body.status

    user.save()

    res.render('users/update', {
        user: user,
        success: true
    })
}