// Middleware para mostrar el arreglo de errores generados al recibir datos erroneos, se retorna en una respuesta JSON con código 403 (Forbidden)

const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(403).send({
      ok: false,
      msg: 'An error has ocurred!',
      errors: error.array(),
    })
  }
}

module.exports = {
  validateResult,
}
