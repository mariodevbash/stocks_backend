const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./src/configs/db.config')

//Crear el servidor de express
const app = express()

//Conexión a la base de datos
dbConnection()

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/stocks', require('./src/routes/stocks'))
app.use('/api/suppliers', require('./src/routes/suppliers'))

if (require.main === module) {
  app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
  )
}

module.exports.app = app
