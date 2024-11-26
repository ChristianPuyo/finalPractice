const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Contacto = sequelize.define('Contacto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Contacto