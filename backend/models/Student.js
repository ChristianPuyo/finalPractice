const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('Producto',{
    idProducto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    precio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Student