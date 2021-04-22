const db = require('../models')
const Order = db.order

exports.findCart = (req, res) => {
    const id = Number(req.params.id)

    Order.aggregate([{
            $match: {
                user_id: id
            }
        }, {
            $lookup: {
                from: "products",
                localField: "cart_items",
                foreignField: "code",
                as: "products"
            }
        }])
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while retrieving products."
            })
        })
}