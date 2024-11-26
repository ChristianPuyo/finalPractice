const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:dsi2024@localhost:5432/inventario',{
    logging: false
})

module.exports=sequelize