const sequelize = require('../db')

//Importar modelos
// const Student = require('./Student') 
const Product = require('./Producto') 

const db ={
    sequelize,
    // Student,
    Product

}



module.exports = db
