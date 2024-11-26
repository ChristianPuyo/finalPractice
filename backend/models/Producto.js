const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../db')

const Producto = sequelize.define('Producto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Producto