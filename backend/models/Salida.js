const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const GestionGrupo = sequelize.define('Salida', {
    idSalida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idAlmacen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Almacens', // Nombre de la tabla con la que se va arelcionar
            key: 'idAlmacen' // Clave primaria de la tabla 'Students'
        }
    },
    fechaSalida:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    tableName: 'Salidas', // Nombre de la tabla en la base de datos en la que es o con la qvas a relacionar
    timestamps: false // Desactiva las columnas createdAt y updatedAt si no existen
});

GestionGrupo.belongsTo(require('./Almacen'), { foreignKey: 'idAlmacen' });

module.exports = GestionGrupo;
