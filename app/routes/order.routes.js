module.exports = (app) => {
    const order = require('../controllers/order.controller')

    let router = require('express').Router()

    // look a cart
    router.get('/user/:id', order.findCart)

    app.use('/api/orders', router)
}