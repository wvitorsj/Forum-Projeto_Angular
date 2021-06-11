

const Answers = require('../database/models/answers.model')

class AnswersService {
  async create(answer, questionId) {
    if (answer == '' || answer == undefined || questionId == undefined) {
      return {
        error: true,
        status: 400,
        message: 'Dados insuficientes para a resposta'
      }
    } else {
      try {
        await Answers.create({
          answer: answer,
          QuestionId: parseInt(questionId)
        })

        return {
          status: 201,
          ok: true
        }
      } catch (error) {
        return {
          error: true,
          status: 500,
          message: 'Erro ao salvar a pergunta no banco'
        }
      }
    }
  }
}

module.exports = AnswersService