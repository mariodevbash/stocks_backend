const { Schema, model } = require('mongoose')

const SupplierSchema = new Schema(
  {
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
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  }
)

module.exports = model('Supplier', SupplierSchema)
