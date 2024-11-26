const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:EVERPISCIS@24@localhost:5432/example1',{
    logging: false
})

module.exports=sequelize