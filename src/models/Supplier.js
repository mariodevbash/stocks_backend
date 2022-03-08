// Modelo para la coleccion de Proveedores

const { Schema, model } = require('mongoose')

const SupplierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  }
)

module.exports = model('Supplier', SupplierSchema)
