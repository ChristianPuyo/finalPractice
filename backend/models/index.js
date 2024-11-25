const sequelize = require('../db')

//Importar modelos
const Student = require('./Student') 

const db ={
    sequelize,
    Student,

}



module.exports = db
