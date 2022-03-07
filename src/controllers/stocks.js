const { response } = require('express')
const client = require('../utils/protoClient')

const getStockBySku = async (req, res = response) => {
  const sku = req.params.sku

  try {
    client.getStock({ sku }, (error, stock) => {
      if (!error) {
        console.log(stock)
      } else {
        console.log(error)
      }
    })

    return res.status(200).json({
      ok: true,
      msg: 'ok',
    })
  } catch (error) {
    console.log('Error')

    return res.status(500).json({
      ok: false,
      msg: 'Error',
    })
  }
}

module.exports = {
  getStockBySku,
}
