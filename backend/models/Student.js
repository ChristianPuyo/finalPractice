const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('Student',{
    id:{
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true   
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Student