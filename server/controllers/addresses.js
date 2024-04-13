const shopify = require('../shopify')

const getAddresses = async (req, res) => {
  // get customer saved addresses by the help of provided customers phone number
  const { phno } = req.query
  let address = []
  try {
    await shopify.customer
      .list({ phone: phno })
      .then((res) => {
        address = res[0]?.addresses
      })
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }

  if (address === undefined) {
    return res.json({
      status: 404,
      errormsg: 'Please provide the details correctly',
    })
  }
  res.json(address)
}

const updateAddress = async (req, res) => {
  // update the provided customer address by the provided customer phone number
  // and set it as their default address
  const { phno, newAddress } = req.body
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

  newAddress.default = true
  let haserror = 0
  try {
    await shopify.customerAddress
      .create(customerid, newAddress)
      .then((resp) => console.log(resp))
      .catch((err) => {
        console.log(err)
        haserror = 1
      })
  } catch (error) {
    console.log(error)
    return res.json({ status: 500, errormsg: 'Internal server error' })
  }

  // console.log(newAddress)

  if (haserror === 1) {
    return res.json({ status: 500, errormsg: 'Something went wrong' })
  }
  res.json({msg:'Address Changed Successfully'})
}

module.exports = { getAddresses, updateAddress }
