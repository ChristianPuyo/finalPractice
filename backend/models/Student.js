const {DataTypes} = require('sequelize')
const sequelize = require('../db')


const Student = sequelize.define('Student',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports=Student
