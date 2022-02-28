const { Schema, model } = require('mongoose')

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}

const LogSchema = Schema({
  message: {
    type: String,
    required: true,
  },
  response_code: {
    type: Number,
    required: true,
  },

  schemaOptions,
})

module.exports = model('Log', LogSchema)
