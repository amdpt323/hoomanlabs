const shopify = require('../shopify')

const getAllOrders = async (req, res) => {
  // try {
  //   const products = await shopify.order.list()
  //   console.log(products)
  //   res.json({ products })
  // } catch (error) {
  //   console.log(error)
  // }
  res.send('getAllOrders')
}

const getOrderList = async (req, res) => {
  // given phone number retriver the order list of that customer
  const { phno } = req.query
  let customerid = -1
  try {
    await shopify.customer
      .list({ phone: phno })
      .then((resp) => {
        if (resp.length !== 0) {
          customerid = resp[0].id
        }
      })
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }

  if (customerid === -1) {
    return res.json({
      status: 404,
      errormsg: 'Please Enter the details correctly',
    })
  }
  let orders = []
  try {
    await shopify.order
      .list({ id: phno })
      .then((resp) => {
        orders = resp.filter((it) => {
          return it.customer.id.toString() === customerid.toString()
        })
      })
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }

  const orderids = orders.map((it) => ({
    orderId: it.id,
  }))

  // console.log(orderids)

  res.json(orderids)
}

const getOrderDetails = async (req, res) => {
  // given order id  Fetch the order status and details of the products for the specified order.
  const { orderId } = req.query
  let orders = []
  // console.log(orderId)
  try {
    await shopify.order
      .list()
      .then((resp) => {
        orders = resp.filter((order) => {
          return order.id.toString() === orderId.toString()
        })
      })
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }

  if (orders.length === 0) {
    return res.json({
      status: 404,
      errormsg: 'Please Enter the details correctly',
    })
  }

  const orderDetails = orders.map((it) => ({
    status: it.financial_status,
    line_items: it.line_items.map((iit) => ({
      id: iit.id,
      name: iit.name,
      weight: iit.grams,
      price: iit.price,
    })),
  }))

  res.json(orderDetails)
}

const cancelOrder = async (req, res) => {
  // given order id cancel the order and confirm the successful cancellation
  const { orderId } = req.body
  // console.log(orderId)
  let haserror = 0
  try {
    await shopify.order
      .cancel(orderId)
      .then((resp) => console.log(resp))
      .catch((err) => {
        haserror = 1;
        console.log(err)
      })
  } catch (error) {
    console.log(error)
    return res.json({
      status: 500,
      errormsg: 'Internal Server Error',
    })
  }

  if(haserror===1){
    return res.json({
      status: 404,
      errormsg: 'Please Enter the details correctly',
    })
  }

  res.send({msg:'Order Cancelled Successfully'})
}

module.exports = { getAllOrders, getOrderList, getOrderDetails, cancelOrder }
