const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize3', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = sequelize