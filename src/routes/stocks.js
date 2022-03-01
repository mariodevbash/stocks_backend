const { Router } = require('express')
const router = Router()

router.get('/prueba', (req, res) => {
  res.json(201)
})

module.exports = router
