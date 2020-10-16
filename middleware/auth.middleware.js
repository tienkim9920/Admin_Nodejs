var Users = require('../models/users.model')

module.exports.CheckMiddle = async (req, res, next) => {
    if (!req.signedCookies.userID){
        res.redirect('/admin/login');
        return;
    }

    // var user = await Users.findOne(({_id: req.signedCookies.userID}))

    // if (!user){
    //     res.redirect('/admin/users');
    //     return;
    // }

    next();

};