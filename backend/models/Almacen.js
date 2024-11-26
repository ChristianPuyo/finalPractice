const {DataTypes} = require('sequelize')
const sequelize = require('../db')
// 'Course' es igual a la tabla y el iid name son las columnas
const Course = sequelize.define('Almacen',{
    idAlmacen: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Productos', // Nombre de la tabla con la que se va arelcionar
            key: 'idProducto' // Clave primaria de la tabla 'Students'
        }
    },
    fechaIngreso: {
        type: DataTypes.STRING,
        allowNull: false// PARA QUE NO VAYA VACIO
    },
    cantidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Almacens', // Nombre de la tabla en la base de datos en la que es o con la qvas a relacionar
    timestamps: false // Desactiva las columnas createdAt y updatedAt si no existen
})
// Definir la relación con el modelo Usuario si es necesario
Course.belongsTo(require('./Student'), { foreignKey: 'idProducto' });

module.exports= Course    