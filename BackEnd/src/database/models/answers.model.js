const sequelize = require('../connection')
const { DataTypes } = require('sequelize')
const Questions = require('./questions.model')

const Answers = sequelize.define('Answers', {
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Questions.hasMany(Answers)

Answers.sync({ force: false })

module.exports = Answers