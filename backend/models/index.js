const sequelize = require('../db')

//Importar modelos

const producto = require('./Producto')  

const db ={
    sequelize,
    producto

}



module.exports = db
