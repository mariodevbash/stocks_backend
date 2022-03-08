const { Router } = require('express')
const router = Router()

const {
  validateGetSupplier,
  validateCreateSupplier,
  validateUpdateSupplier,
  validateDeleteSupplier,
} = require('../validators/suppliers')

const {
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/suppliers')

// Rutas pertenecientes a "/api/suppliers"
// El flujo pasa primero por la validación y despues se va al controlador

router.get('/:id', validateGetSupplier, getSupplierById)

router.post('/', validateCreateSupplier, createSupplier)

router.put('/:id', validateUpdateSupplier, updateSupplier)

router.delete('/:id', validateDeleteSupplier, deleteSupplier)

module.exports = router
