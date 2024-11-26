const sequelize = require('../db')

//Importar modelos
// const Student = require('./Student')
const Productos = require('./Productos')

const db ={
    sequelize,
    // Student,
    Productos

}



module.exports = db
