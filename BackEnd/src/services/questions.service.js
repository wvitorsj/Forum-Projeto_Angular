
const Questions = require('../database/models/questions.model')
const Answers = require('../database/models/answers.model')

class QuestionsService {
  async index() {
    try {
      const questions = await Questions.findAll()

      return {
        status: 200,
        ok: true,
        questions: questions
      }
    } catch(error) {
      return {
        message: 'Erro ao recuperar dados',
        status: 500,
        error: true
      }
    }
  }

  async create(title, body) {
    if (title == '' || body == '' || title == undefined || body == undefined) {
      return {
        message: 'Dados insuficientes para salvar', status: 400, error: true
      }
    } else {
      try {
        await Questions.create({
          title: title,
          body: body
        })

        return {
          ok: true,
          status: 201
        }
      } catch (error) {
        return {
          message: 'Erro ao salvar dados no banco',
          status: 500,
          error: true
        }
      }
    }
  }

  async findById(id) {
    if (id == undefined) {
      return {
        message: 'Dados insuficientes para salvar', status: 400, error: true
      }
    } else {
      const question = await Questions.findByPk(parseInt(id), {
        include: [Answers]
      })

      if (question == null || question == undefined) {
        return {
          error: true,
          status: 404,
          message: 'Pergunta não encontrada'
        }
      } else {
        return {
          status: 200,
          question: question
        }
      }
    }
  }
}

module.exports = QuestionsService