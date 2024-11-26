const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Configuración de conexión a PostgreSQL

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que no haya duplicados
        validate: {
            notEmpty: {
                msg: 'El código del producto no puede estar vacío.',
            },
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El nombre del producto no puede estar vacío.',
            },
        },
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                msg: 'El precio debe ser un número válido.',
            },
            min: {
                args: [0],
                msg: 'El precio debe ser un valor positivo.',
            },
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'La cantidad debe ser un número entero.',
            },
            min: {
                args: [0],
                msg: 'La cantidad debe ser un número positivo.',
            },
        },
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'La categoría no puede estar vacía.',
            },
        },
    },
}, {
    timestamps: true, 
    tableName: 'products', 
});

module.exports = Product;
