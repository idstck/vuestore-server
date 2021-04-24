module.exports = (app) => {
    const order = require('../controllers/order.controller')

    let router = require('express').Router()

    // look a cart
    router.get('/user/:id', order.findCart)
    router.post('/update/user/:id', order.addToCart)

    app.use('/api/orders', router)
}