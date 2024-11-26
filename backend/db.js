const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres:://postgres:mimares10@localhost:5432/example2',{
    logging: false
})

module.exports=sequelize