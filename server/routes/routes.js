const express = require('express')
const router = express.Router()

const {
  getAllOrders,
  getOrderList,
  getOrderDetails,
  cancelOrder,
} = require('../controllers/orders')

const {
  getAddresses, updateAddress
} = require('../controllers/addresses')

router.route('/getAllOrders').get(getAllOrders)


router.route('/orders/getOrderList').get(getOrderList)
router.route('/orders/getOrderDetails').get(getOrderDetails)
router.route('/orders/cancelOrder').post(cancelOrder)

router.route('/addresses').get(getAddresses).put(updateAddress)

module.exports = router