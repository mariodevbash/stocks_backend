// Modelo para la coleccion de Logs

const { Schema, model } = require('mongoose')

const LogSchema = Schema(
  {
    message: {
      type: String,
      required: true,
    },
    response_code: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  }
)

module.exports = model('Log', LogSchema)
