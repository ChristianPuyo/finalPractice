const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Student = sequelize.define('Student',{
    id:{
        type: DataTypes.integger,
        primaryKey: true,
        autoIncrement: true   
    },
    firstName: {
        type: DataTypes.strings,
        allowNull:false
    },
    lastName: {
        type: DataTypes.strings,
        allowNull: false
    }
})

module.exports = student