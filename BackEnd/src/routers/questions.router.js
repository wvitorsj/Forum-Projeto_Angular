

const { Router } = require('express')
const router = Router()
const questionsController = require('../controllers/questions.controller')

router.post('/question', questionsController.create)
router.get('/questions', questionsController.index)
router.get('/question/:id', questionsController.find)

module.exports = router