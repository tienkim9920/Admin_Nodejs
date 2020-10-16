var Products = require('../models/products.model');

// View Index Product
module.exports.index = async (req, res) => {

    var products = await Products.find();

    res.render('products/index', {
        products: products
    })

}


// View Index Create
module.exports.viewCreateProduct = (req, res) => {
    
    res.render('products/create', {
        success: false
    })

}

//Create Product
module.exports.addProduct = async (req, res) => {

    var product = new Products()

    product.name = req.body.name
    product.price = req.body.price
    product.status = req.body.status

    var fileImage = req.files.image
    var fileName = fileImage.name

    var fileProduct = "/img/" + fileName

    product.img = fileProduct

    console.log(product.name)

    console.log(fileName)
    console.log(fileProduct)

    product.save();

    fileImage.mv('./public/img/' + fileName)

    res.render('products/create', {
        success: true
    })

}

//Delete Product
module.exports.deleteProduct = async (req, res) => {

    var idDelete = req.body.productID

    console.log(idDelete)

    Products.findOneAndRemove({_id: idDelete}, (err) => {
        if (err){
            console.log(err);
            return
        }
        return res.status(200).send()
    });

    res.redirect('/admin/products');

}


//Update Product
module.exports.viewUpdate = async (req, res) => {
    
    var idProduct = req.params.id

    var product = await Products.findOne({_id: idProduct})

    res.render('products/update', {
        product: product,
        success: false
    })

}

module.exports.updateProduct = async (req, res) => {

    var idProduct = req.params.id

    var product = await Products.findOne({_id: idProduct})

    product.name = req.body.name
    product.price = req.body.price
    product.status = req.body.status

    product.save()

    res.render('products/update', {
        product: product,
        success: true
    })
}