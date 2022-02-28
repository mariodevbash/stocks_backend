const { Schema, model } = require('mongoose')

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}

const SupplierSchema = Schema({
  id_main_db: {
    type: Number,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },

  schemaOptions,
})

module.exports = model('Supplier', SupplierSchema)
