const sequelize = require('../db')
const Contacto = require('./Contacto')

//Importar modelos
// const Student = require('./Contacto') 

const db ={
    sequelize,
    // Student,
    Contacto,
    

}



module.exports = db
