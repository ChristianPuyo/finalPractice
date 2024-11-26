const sequelize = require('../db')

//Importar modelos
const Producto = require('./Producto') 

const db ={
    sequelize,
    Producto,

}



module.exports = db

