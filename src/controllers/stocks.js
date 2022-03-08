const { response } = require('express')
const client = require('../utils/protoClient')
const Log = require('../models/Log')

// Traer información del stock de un producto en una base externa en base a un id recibido
const getStockBySku = async (req, res = response) => {
  const sku = req.params.sku

  try {
    client.getStock({ sku }, (error, stock) => {
      if (!error) {
        //TODO: Cuando se reciba la información del stock retornarlo en un JSON hacia el front
        console.log(stock)
      } else {
        const log = new Log({ message: error, response_code: 500 })
        log.save()
      }
    })

    return res.status(200).json({
      ok: true,
      msg: 'ok',
    })
  } catch (error) {
    const log = new Log({ message: error, response_code: 500 })
    log.save()

    return res.status(500).json({ ok: false, msg: error })
  }
}

module.exports = {
  getStockBySku,
}
