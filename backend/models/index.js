const sequelize = require('../db')

//Importar modelos
const Student = require('./Student') 
const Course = require('./Almacen') 
const GestionGrupo = require('./Salida') 

const db ={
    sequelize,
    Student,

}



module.exports = db
