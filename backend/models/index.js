const sequelize = require('../db')


const Student = require('./Student') 

const db ={
    sequelize,
    Student
}

module.exports = db