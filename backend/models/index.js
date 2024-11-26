const sequelize = require('../db')


//Importar modelos
const Student = require('./Student') 
const Contacto = require('./Contacto')


const db ={
    sequelize,
    Student,
    Contacto

}



module.exports = db
