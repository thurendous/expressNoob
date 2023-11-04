const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('user here with router "/"')
})
router.get('/info', (req, res) => {
  res.send('user info here with router')
})

router.get('/:id', (req, res) => {
  res.send(`user with id ${req.params.id} here with router`)
})

router.delete('/:id', (req, res) => {})

module.exports = router
