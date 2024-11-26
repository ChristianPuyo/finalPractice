const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Producto = sequelize.define('Producto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Producto