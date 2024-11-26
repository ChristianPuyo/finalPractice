const sequelize = require('../db')

//Importar modelos
const Contacto = require('./Student') 

const db ={
    sequelize,
    Contacto,

}



module.exports = db
