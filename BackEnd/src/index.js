
const express = require('express')
const cors = require('cors')
const indexRouter = require('./routers/index.router')
const questionsRouter = require('./routers/questions.router')
const answersRouter = require('./routers/answers.router')
const app = express()

//database connection
require('./database/connection')
require('./database/models/questions.model')
require('./database/models/answers.model')

//configuração
app.use(express.json())
app.use(cors())

//rotas
app.use(indexRouter)
app.use(questionsRouter)
app.use(answersRouter)

//server
app.listen(3000, () => {
    console.log('Servidor Iniciado')
})


/**
 * GET: USADO PARA PEGAR DADOS
 * 
 * POST: USADO PARA CRIAR DADOS
 * 
 * PUT: USADO PARA ATUALIZAR DADOS
 * 
 * DELETE: USADO PARA DELETAR DADOS
**/

/*ROTAS */
/**
 * REQUEST: PARAMETRO RESPONSAVEL POR RECEBER OS DADOS DA RQUISIÇÃO
 * 
 * RESPONSE: PARAMETRO RESPONSAVEL POR RETORBNAR DADOS DA REQUISIÇÃO
 */