const { response } = require('express')
const Supplier = require('../models/Supplier')

const getSupplierById = async (req, res = response) => {
  const supplierId = req.params.id

  try {
    const supplier = await Supplier.findOne(
      { id_main_db: supplierId },
      'id_main_db url token'
    )

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
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Server Internal Error',
    })
  }
}

const createSupplier = async (req, res = response) => {
  const supplier = new Supplier(req.body)

  try {
    const savedSupplier = await supplier.save()

    return res.status(201).json({
      ok: true,
      data: savedSupplier,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Server Internal Error',
    })
  }
}

const updateSupplier = async (req, res = response) => {
  const supplierId = req.params.id

  try {
    const supplier = await Supplier.findOne({ id_main_db: supplierId })

    if (!supplier) {
      return res.status(404).json({
        ok: false,
        msg: 'Supplier not found',
      })
    }

    const newSupplier = {
      ...req.body,
    }

    const updatedSupplier = await Supplier.findOneAndUpdate(
      { id_main_db: supplierId },
      newSupplier,
      { new: true }
    )

    return res.status(200).json({
      ok: true,
      data: updatedSupplier,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Server Internal Error',
    })
  }
}

const deleteSupplier = async (req, res = response) => {
  const supplierId = req.params.id

  try {
    const supplier = await Supplier.findOne({ id_main_db: supplierId })

    if (!supplier) {
      return res.status(404).json({
        ok: false,
        msg: 'Supplier not found',
      })
    }

    const { id } = await Supplier.findOneAndDelete({ id_main_db: supplierId })

    return res.status(200).json({
      ok: true,
      id,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Server Internal Error',
    })
  }
}

module.exports = {
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
}
