const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const contactos = sequelize.define('contactos', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    Phonenumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = contactos;
