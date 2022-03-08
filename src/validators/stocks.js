const { param } = require('express-validator')
const { validateResult } = require('../middlewares/validateFields')

//Valida que el sku mandado en la ruta sea un número.
const validateGetStock = [
  param('sku').custom((value) => {
    if (isNaN(parseInt(value))) {
      throw new Error('Sku must be a number')
    }
    return true
  }),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

module.exports = {
  validateGetStock,
}
