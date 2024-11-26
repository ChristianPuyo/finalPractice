const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Contacto = sequelize.define('Contacto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    Numero_telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Correo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Contacto