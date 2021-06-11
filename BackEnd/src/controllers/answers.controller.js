
const AnswerService = require('../services/answers.service')

module.exports = {
  async create(request, response) {
    const questionId = request.params.questionId
    const answer = request.body.answer

    const answerService = new AnswerService()

    const data = await answerService.create(answer, questionId)

    if (data.error != undefined) {
      return response.status(data.status).json({
        message: data.message
      })
    } else {
      return response.status(data.status).json({
        ok: data.ok
      })
    }
  }
}