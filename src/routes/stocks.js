const { Router } = require('express')
const { getStockBySku } = require('../controllers/stocks')
const { validateGetStock } = require('../validators/stocks')

const router = Router()

// Rutas pertenecientes a "/api/stocks"
// El flujo pasa primero por la validación y despues se va al controlador

router.get('/:sku', validateGetStock, getStockBySku)

module.exports = router
