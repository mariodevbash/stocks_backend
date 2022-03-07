const { Router } = require('express')
const router = Router()

const { getStockBySku } = require('../controllers/stocks')

router.get('/:sku', getStockBySku)

module.exports = router
