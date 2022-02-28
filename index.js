const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./src/configs/db.config')

const app = express()

dbConnection()

if (require.main === module) {
  app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
  )
}

module.exports.app = app
