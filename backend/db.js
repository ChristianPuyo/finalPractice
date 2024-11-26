const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:brunoperez17@localhost:5432/prueba',{
    logging: false
})

module.exports=sequelize