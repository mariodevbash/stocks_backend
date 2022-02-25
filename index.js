const express = require('express')
require('dotenv').config()

const app = express()

if (require.main === module) {
  app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
  )
}

module.exports.app = app
