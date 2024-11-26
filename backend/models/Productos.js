const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Productos = sequelize.define('Productos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    codigoProducto: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    precio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Productos;