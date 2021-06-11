

const { Router } = require('express')
const router = Router()
const answersController = require('../controllers/answers.controller')

router.post('/answer/:questionId', answersController.create)

module.exports = router