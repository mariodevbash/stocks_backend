const { response } = require('express')
const Supplier = require('../models/Supplier')
const Log = require('../models/Log')

// Traer información (name, url y token) de un proveedor en base a su _id de mongoDB
// Route: /api/suppliers/:id (GET)
const getSupplierById = async (req, res = response) => {
  const supplierId = req.params.id

  try {
    const supplier = await Supplier.findById(supplierId, 'name url token')

    if (!supplier) {
      return res.status(404).json({
        ok: false,
        msg: 'Supplier not found',
      })
    }

    return res.status(200).json({
      ok: true,
      data: supplier,
    })
  } catch (error) {
    const log = new Log({ message: error, response_code: 500 })
    log.save()

    return res.status(500).json({ ok: false, msg: error })
  }
}

// Guardar un nuevo proveedor con los datos recibidos (name, url, token)
// Route: /api/suppliers (POST)
const createSupplier = async (req, res = response) => {
  const supplier = new Supplier(req.body)

  try {
    const savedSupplier = await supplier.save()

    return res.status(201).json({
      ok: true,
      data: savedSupplier,
    })
  } catch (error) {
    const log = new Log({ message: error, response_code: 500 })
    log.save()

    return res.status(500).json({ ok: false, msg: error })
  }
}

// Actualizar la información de un proveedor con los nuevos datos recibidos (name, url, token) en base a su _id de mongoDB
// Route: /api/suppliers/:id (PUT)
const updateSupplier = async (req, res = response) => {
  const supplierId = req.params.id

  try {
    const supplier = await Supplier.findById(supplierId)

    if (!supplier) {
      return res.status(404).json({
        ok: false,
        msg: 'Supplier not found',
      })
    }

    const newSupplier = {
      ...req.body,
    }

    const updatedSupplier = await Supplier.findByIdAndUpdate(
      supplierId,
      newSupplier,
      { new: true }
    )

    return res.status(200).json({
      ok: true,
      data: updatedSupplier,
    })
  } catch (error) {
    const log = new Log({ message: error, response_code: 500 })
    log.save()

    return res.status(500).json({ ok: false, msg: error })
  }
}

// Eliminar un proveedor en base a su _id de mongoDB
// Route: /api/suppliers/:id (DELETE)
const deleteSupplier = async (req, res = response) => {
  const supplierId = req.params.id

  try {
    const supplier = await Supplier.findById(supplierId)

    if (!supplier) {
      return res.status(404).json({
        ok: false,
        msg: 'Supplier not found',
      })
    }

    const { id } = await Supplier.findByIdAndDelete(supplierId)

    return res.status(200).json({
      ok: true,
      id,
    })
  } catch (error) {
    const log = new Log({ message: error, response_code: 500 })
    log.save()

    return res.status(500).json({ ok: false, msg: error })
  }
}

module.exports = {
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
}
