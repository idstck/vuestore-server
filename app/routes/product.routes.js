module.exports = (app) => {
    const products = require('../controllers/product.controller')

    let router = require('express').Router()

    // index
    router.get('/', products.findAll)

    app.use('/api/products', router)
}