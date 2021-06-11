
const QuestionsService = require('../services/questions.service')

module.exports = {
  async index(request, response) {
    const questionsService = new QuestionsService()

    const data = await questionsService.index()

    if (data.error != undefined) {
      return response.status(data.status).json({
        message: data.message
      })
    } else {
      return response.status(data.status).json(data.questions)
    }
  },

  async create(request, response) {
    const title = request.body.title
    const body = request.body.body

    const questionsService = new QuestionsService()

    const data = await questionsService.create(title, body)

    if (data.error != undefined) {
      return response.status(data.status).json({
        message: data.message
      })
    } else {
      return response.status(data.status).json({
        ok: data.ok
      })
    }
  },

  async find(request, response) {
    const id = request.params.id

    const questionsService = new QuestionsService()

    const data = await questionsService.findById(id)

    if (data.error) {
      return response.status(data.status).json({
        message: data.message
      })
    } else {
      return response.status(data.status).json(data.question)
    }
  }
}