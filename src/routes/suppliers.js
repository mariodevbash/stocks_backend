const { Router } = require('express')
const router = Router()

const {
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/suppliers')

router.get('/:id', getSupplierById)

router.post('/', createSupplier)

router.put('/:id', updateSupplier)

router.delete('/:id', deleteSupplier)

module.exports = router
