require('dotenv').config()
const Shopify = require('shopify-api-node')

const shopify = new Shopify({
  shopName: 'hoomanabs.myshopify.com',
  apiKey: process.env.SHOPIFY_API,
  password: process.env.SHOPIFY_PASS,
})

module.exports = shopify
