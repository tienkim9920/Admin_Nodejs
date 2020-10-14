var Orders = require('../models/orders.model')

module.exports.index = async (req, res) => {

    var orders = await Orders.find()

    res.render('orders/index', {
        orders: orders
    })

}