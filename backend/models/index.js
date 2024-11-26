const sequelize = require('../db')

const contactos = require('./contactos')
const db ={
    sequelize,
    contactos,

}



module.exports = db
