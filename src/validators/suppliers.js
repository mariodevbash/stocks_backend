const { param, body } = require('express-validator')
const { validateResult } = require('../middlewares/validateFields')

//Valida que el id recibido en la ruta sea un id compatible con mongoDB (_id)
const validateGetSupplier = [
  param('id').isMongoId().withMessage('Supplier id must be a mongoId'),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

//Valida que los datos recibidos en el formulario cumplan los requerimentos necesarios para pasar a la creación
const validateCreateSupplier = [
  body('name')
    .exists()
    .withMessage("Prop 'name' is required.")
    .not()
    .isEmpty()
    .withMessage("Prop 'name' can't be empty.")
    .isString()
    .withMessage("Prop 'name' must be a string."),

  body('url')
    .exists()
    .withMessage("Prop 'url' is required.")
    .not()
    .isEmpty()
    .withMessage("Prop 'url' can't be empty.")
    .isString()
    .withMessage("Prop 'url' must be a string."),

  body('token')
    .exists()
    .withMessage("Prop 'token' is required.")
    .isString()
    .withMessage("Prop 'token' must be a string."),

  (req, res, next) => {
    validateResult(req, res, next)
  },
]

//Valida que los datos recibidos en el formulario cumplan los requerimentos necesarios para pasar a la edición
const validateUpdateSupplier = [
  param('id').isMongoId().withMessage('Supplier id must be a mongoId'),

  body('name')
    .exists()
    .withMessage("Prop 'name' is required.")
    .not()
    .isEmpty()
    .withMessage("Prop 'name' can't be empty.")
    .isString()
    .withMessage("Prop 'name' must be a string."),

  body('url')
    .exists()
    .withMessage("Prop 'url' is required.")
    .not()
    .isEmpty()
    .withMessage("Prop 'url' can't be empty.")
    .isString()
    .withMessage("Prop 'url' must be a string."),

  body('token')
    .exists()
    .withMessage("Prop 'token' is required.")
    .isString()
    .withMessage("Prop 'token' must be a string."),

  (req, res, next) => {
    validateResult(req, res, next)
  },
]

//Valida que el id recibido en la ruta sea un id compatible con mongoDB (_id)
const validateDeleteSupplier = [
  param('id').isMongoId().withMessage('Supplier id must be a mongoId'),

  (req, res, next) => {
    validateResult(req, res, next)
  },
]

module.exports = {
  validateGetSupplier,
  validateCreateSupplier,
  validateUpdateSupplier,
  validateDeleteSupplier,
}
