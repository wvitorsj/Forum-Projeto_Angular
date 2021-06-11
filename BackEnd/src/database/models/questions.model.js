const sequelize = require('../connection')
const { DataTypes } = require('sequelize')

const Questions = sequelize.define('Questions', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Questions.sync({ force: false })

module.exports = Questions