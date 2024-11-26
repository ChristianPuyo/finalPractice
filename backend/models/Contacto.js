const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Contacto = sequelize.define('Contacto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING
    }
    
})

module.exports = Contacto